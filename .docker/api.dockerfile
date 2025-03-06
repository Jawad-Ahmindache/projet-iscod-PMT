FROM maven:3.9.9-eclipse-temurin-23
WORKDIR /app
COPY api .
RUN mvn clean package -DskipTests


# Extraire les valeurs du fichier properties
RUN apt-get update && apt-get install -y && \
    DB_URL=$(grep "^spring.datasource.url=" src/main/resources/application.properties | cut -d'=' -f2-) && \
    DB_NAME=$(grep "^database-name=" src/main/resources/application.properties | cut -d'=' -f2-) && \
    DB_USER=$(grep "^spring.datasource.username=" src/main/resources/application.properties | cut -d'=' -f2-) && \
    DB_PASSWORD=$(grep "^spring.datasource.password=" src/main/resources/application.properties | cut -d'=' -f2-) && \
    echo "DB_URL=${DB_URL}" >> /app/.env && \
    echo "DB_NAME=${DB_NAME}" >> /app/.env && \
    echo "DB_USER=${DB_USER}" >> /app/.env && \
    echo "DB_PASSWORD=${DB_PASSWORD}" >> /app/.env

# Install PostgreSQL
RUN export $(cat /app/.env | xargs) && \
    apt-get install -y postgresql postgresql-contrib && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Configure PostgreSQL
USER postgres
RUN export $(cat /app/.env | xargs) && \
    if [ -z "$DB_NAME" ] || [ -z "$DB_USER" ] || [ -z "$DB_PASSWORD" ]; then \
        echo "Error: Database environment variables are not set correctly" && \
        echo "DB_NAME=$DB_NAME" && \
        echo "DB_USER=$DB_USER" && \
        echo "DB_PASSWORD=$DB_PASSWORD" && \
        exit 1; \
    fi && \
    /etc/init.d/postgresql start && \
    echo "host all all 0.0.0.0/0 md5" >> /etc/postgresql/16/main/pg_hba.conf && \
    echo "listen_addresses='*'" >> /etc/postgresql/16/main/postgresql.conf && \
    psql --command "SELECT 1 FROM pg_roles WHERE rolname = '$DB_USER'" | grep -q 1 || psql --command "CREATE USER $DB_USER WITH SUPERUSER PASSWORD '$DB_PASSWORD';" && \
    psql --command "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1 || psql -c "CREATE DATABASE $DB_NAME;" && \
    psql -c "ALTER DATABASE $DB_NAME OWNER TO $DB_USER;" && \
    /etc/init.d/postgresql stop

USER root

# Expose ports
EXPOSE 8080
EXPOSE 5432

# Start PostgreSQL and Spring Boot application
CMD service postgresql start && \
    mvn install && \
    java -jar target/*.jar 