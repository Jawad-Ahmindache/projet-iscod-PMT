/*
 Navicat Premium Data Transfer

 Source Server         : 217.160.49.17_5432
 Source Server Type    : PostgreSQL
 Source Server Version : 160008 (160008)
 Source Host           : 217.160.49.17:5432
 Source Catalog        : pmt
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 160008 (160008)
 File Encoding         : 65001

 Date: 08/03/2025 15:26:36
*/


-- ----------------------------
-- Sequence structure for notifications_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."notifications_id_seq";
CREATE SEQUENCE "public"."notifications_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for project_members_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."project_members_id_seq";
CREATE SEQUENCE "public"."project_members_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for projects_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."projects_id_seq";
CREATE SEQUENCE "public"."projects_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for task_histories_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."task_histories_id_seq";
CREATE SEQUENCE "public"."task_histories_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tasks_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tasks_id_seq";
CREATE SEQUENCE "public"."tasks_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."users_id_seq";
CREATE SEQUENCE "public"."users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS "public"."notifications";
CREATE TABLE "public"."notifications" (
  "id" int8 NOT NULL DEFAULT nextval('notifications_id_seq'::regclass),
  "created_at" timestamp(6),
  "is_read" bool,
  "message" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "title" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "user_id" int8 NOT NULL
)
;

-- ----------------------------
-- Records of notifications
-- ----------------------------

-- ----------------------------
-- Table structure for project_members
-- ----------------------------
DROP TABLE IF EXISTS "public"."project_members";
CREATE TABLE "public"."project_members" (
  "id" int8 NOT NULL DEFAULT nextval('project_members_id_seq'::regclass),
  "joined_at" timestamp(6) NOT NULL,
  "role" int2 NOT NULL,
  "project_id" int8 NOT NULL,
  "user_id" int8 NOT NULL
)
;

-- ----------------------------
-- Records of project_members
-- ----------------------------

-- ----------------------------
-- Table structure for projects
-- ----------------------------
DROP TABLE IF EXISTS "public"."projects";
CREATE TABLE "public"."projects" (
  "id" int8 NOT NULL DEFAULT nextval('projects_id_seq'::regclass),
  "created_at" timestamp(6),
  "description" text COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "start_date" date,
  "updated_at" timestamp(6)
)
;

-- ----------------------------
-- Records of projects
-- ----------------------------

-- ----------------------------
-- Table structure for task_histories
-- ----------------------------
DROP TABLE IF EXISTS "public"."task_histories";
CREATE TABLE "public"."task_histories" (
  "id" int8 NOT NULL DEFAULT nextval('task_histories_id_seq'::regclass),
  "change_description" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "changed_at" timestamp(6) NOT NULL,
  "changed_by_id" int8 NOT NULL,
  "task_id" int8 NOT NULL
)
;

-- ----------------------------
-- Records of task_histories
-- ----------------------------

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS "public"."tasks";
CREATE TABLE "public"."tasks" (
  "id" int8 NOT NULL DEFAULT nextval('tasks_id_seq'::regclass),
  "created_at" timestamp(6),
  "description" varchar(255) COLLATE "pg_catalog"."default",
  "due_date" date,
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "priority" int2 NOT NULL,
  "status" int2 NOT NULL,
  "updated_at" timestamp(6),
  "assigned_user_id" int8,
  "project_id" int8 NOT NULL
)
;

-- ----------------------------
-- Records of tasks
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS "public"."users";
CREATE TABLE "public"."users" (
  "id" int8 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
  "created_at" timestamp(6),
  "email" varchar(100) COLLATE "pg_catalog"."default",
  "password" varchar(120) COLLATE "pg_catalog"."default",
  "updated_at" timestamp(6),
  "username" varchar(50) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO "public"."users" VALUES (1, '2025-03-08 14:24:38.370818', 'DSFFDSSD@M.COM', '$2a$10$Dw0KVAzalCyFREJKNM2PNeDec7xoJf4kwHCGNh/p.LfJvChundiNm', '2025-03-08 14:24:38.370851', 'DSFFDSS');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."notifications_id_seq"
OWNED BY "public"."notifications"."id";
SELECT setval('"public"."notifications_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."project_members_id_seq"
OWNED BY "public"."project_members"."id";
SELECT setval('"public"."project_members_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."projects_id_seq"
OWNED BY "public"."projects"."id";
SELECT setval('"public"."projects_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."task_histories_id_seq"
OWNED BY "public"."task_histories"."id";
SELECT setval('"public"."task_histories_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."tasks_id_seq"
OWNED BY "public"."tasks"."id";
SELECT setval('"public"."tasks_id_seq"', 1, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."users_id_seq"
OWNED BY "public"."users"."id";
SELECT setval('"public"."users_id_seq"', 1, true);

-- ----------------------------
-- Primary Key structure for table notifications
-- ----------------------------
ALTER TABLE "public"."notifications" ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table project_members
-- ----------------------------
ALTER TABLE "public"."project_members" ADD CONSTRAINT "ukaydweb1re2g5786xaugww4u0" UNIQUE ("project_id", "user_id");

-- ----------------------------
-- Checks structure for table project_members
-- ----------------------------
ALTER TABLE "public"."project_members" ADD CONSTRAINT "project_members_role_check" CHECK (role >= 0 AND role <= 2);

-- ----------------------------
-- Primary Key structure for table project_members
-- ----------------------------
ALTER TABLE "public"."project_members" ADD CONSTRAINT "project_members_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table projects
-- ----------------------------
ALTER TABLE "public"."projects" ADD CONSTRAINT "projects_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table task_histories
-- ----------------------------
ALTER TABLE "public"."task_histories" ADD CONSTRAINT "task_histories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Checks structure for table tasks
-- ----------------------------
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_priority_check" CHECK (priority >= 0 AND priority <= 2);
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_status_check" CHECK (status >= 0 AND status <= 2);

-- ----------------------------
-- Primary Key structure for table tasks
-- ----------------------------
ALTER TABLE "public"."tasks" ADD CONSTRAINT "tasks_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "uk_6dotkott2kjsp8vw4d0m25fb7" UNIQUE ("email");
ALTER TABLE "public"."users" ADD CONSTRAINT "uk_r43af9ap4edm43mmtq01oddj6" UNIQUE ("username");

-- ----------------------------
-- Primary Key structure for table users
-- ----------------------------
ALTER TABLE "public"."users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table notifications
-- ----------------------------
ALTER TABLE "public"."notifications" ADD CONSTRAINT "fk9y21adhxn0ayjhfocscqox7bh" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table project_members
-- ----------------------------
ALTER TABLE "public"."project_members" ADD CONSTRAINT "fkdki1sp2homqsdcvqm9yrix31g" FOREIGN KEY ("project_id") REFERENCES "public"."projects" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."project_members" ADD CONSTRAINT "fkgul2el0qjk5lsvig3wgajwm77" FOREIGN KEY ("user_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table task_histories
-- ----------------------------
ALTER TABLE "public"."task_histories" ADD CONSTRAINT "fk81fs5c0tfi6jfp04q0s9sl4n1" FOREIGN KEY ("changed_by_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."task_histories" ADD CONSTRAINT "fkmacu1ui1wsdfvrow9y358v5u5" FOREIGN KEY ("task_id") REFERENCES "public"."tasks" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table tasks
-- ----------------------------
ALTER TABLE "public"."tasks" ADD CONSTRAINT "fk447x172gvsq2ajfbcenhtkhc8" FOREIGN KEY ("assigned_user_id") REFERENCES "public"."users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."tasks" ADD CONSTRAINT "fksfhn82y57i3k9uxww1s007acc" FOREIGN KEY ("project_id") REFERENCES "public"."projects" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
