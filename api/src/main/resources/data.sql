-- Suppression des données existantes dans l'ordre inverse des dépendances
DELETE FROM task_histories;
DELETE FROM notifications;
DELETE FROM tasks;
DELETE FROM project_members;
DELETE FROM projects;
DELETE FROM users;

-- Insertion des données dans l'ordre des dépendances
-- 1. Utilisateurs (table indépendante)
INSERT INTO users (id, username, email, password, created_at, updated_at) VALUES
(1, 'admin', 'admin@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW()), -- password: admin123
(2, 'alice', 'alice@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW()),
(3, 'bob', 'bob@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW()),
(4, 'charlie', 'charlie@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW()),
(5, 'david', 'david@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW()),
(6, 'emma', 'emma@example.com', '$2a$10$mXQZbpRTEhtO2wTEyKnEJO1LTMnHxiAvr4Rtvfl4PZwo7XAofRTjq', NOW(), NOW());

-- 2. Projets (dépend des utilisateurs)
INSERT INTO projects (id, name, description, start_date, admin_id, created_at, updated_at) VALUES
(1, 'Projet E-commerce', 'Développement d''une plateforme e-commerce complète', '2024-01-01', 1, NOW(), NOW()),
(2, 'Application Mobile', 'Application mobile de gestion de tâches', '2024-02-01', 2, NOW(), NOW()),
(3, 'Refonte Site Web', 'Refonte complète du site web corporate', '2024-03-01', 3, NOW(), NOW());

-- 3. Membres des projets (dépend des projets et utilisateurs)
INSERT INTO project_members (id, project_id, user_id, role, joined_at) VALUES
-- Projet E-commerce
(1, 1, 1, 0, NOW()),      -- admin est admin (0)
(2, 1, 2, 1, NOW()),      -- alice est membre (1)
(3, 1, 3, 2, NOW()),      -- bob est observateur (2)
-- Application Mobile
(4, 2, 2, 0, NOW()),      -- alice est admin (0)
(5, 2, 3, 1, NOW()),      -- bob est membre (1)
(6, 2, 4, 1, NOW()),      -- charlie est membre (1)
(7, 2, 5, 2, NOW()),      -- david est observateur (2)
-- Refonte Site Web
(8, 3, 3, 0, NOW()),      -- bob est admin (0)
(9, 3, 4, 1, NOW()),      -- charlie est membre (1)
(10, 3, 6, 1, NOW());     -- emma est membre (1)

-- 4. Tâches (dépend des projets et utilisateurs)
INSERT INTO tasks (id, project_id, name, description, due_date, priority, status, assigned_user_id, created_at, updated_at) VALUES
-- Projet E-commerce
(1, 1, 'Configuration du serveur', 'Mise en place de l''infrastructure serveur', '2024-01-15', 2, 0, 2, NOW(), NOW()),          -- TODO, HIGH, assignée à Alice
(2, 1, 'Développement Frontend', 'Création des interfaces utilisateur', '2024-02-01', 1, 1, 2, NOW(), NOW()),                   -- IN_PROGRESS, MEDIUM, assignée à Alice
(3, 1, 'Intégration API Paiement', 'Intégration de Stripe', '2024-02-15', 2, 0, 1, NOW(), NOW()),                             -- TODO, HIGH, assignée à Admin
-- Application Mobile
(4, 2, 'Design UI/UX', 'Création des maquettes', '2024-02-15', 0, 2, 4, NOW(), NOW()),                                        -- COMPLETED, LOW, assignée à Charlie
(5, 2, 'Développement iOS', 'Développement de l''app iOS', '2024-03-01', 2, 1, 3, NOW(), NOW()),                               -- IN_PROGRESS, HIGH, assignée à Bob
(6, 2, 'Développement Android', 'Développement de l''app Android', '2024-03-15', 2, 0, 2, NOW(), NOW()),                       -- TODO, HIGH, assignée à Alice
-- Refonte Site Web
(7, 3, 'Analyse des besoins', 'Analyse des besoins clients', '2024-03-10', 1, 2, 4, NOW(), NOW()),                            -- COMPLETED, MEDIUM, assignée à Charlie
(8, 3, 'Design System', 'Création du design system', '2024-03-20', 2, 1, 6, NOW(), NOW()),                                     -- IN_PROGRESS, HIGH, assignée à Emma
(9, 3, 'Développement Frontend', 'Intégration des composants', '2024-04-01', 1, 0, 3, NOW(), NOW());                          -- TODO, MEDIUM, assignée à Bob

-- 5. Historique des tâches (dépend des tâches et utilisateurs)
INSERT INTO task_histories (id, task_id, changed_by_id, change_description, changed_at) VALUES
(1, 1, 1, 'Tâche créée', NOW()),
(2, 2, 1, 'Tâche créée', NOW()),
(3, 2, 2, 'Statut changé à EN_COURS', NOW()),
(4, 3, 1, 'Tâche créée', NOW()),
(5, 4, 2, 'Tâche créée', NOW()),
(6, 4, 4, 'Tâche marquée comme terminée', NOW()),
(7, 5, 2, 'Tâche créée', NOW()),
(8, 5, 3, 'Statut changé à EN_COURS', NOW()),
(9, 6, 2, 'Tâche créée', NOW()),
(10, 7, 3, 'Tâche créée', NOW()),
(11, 7, 4, 'Tâche marquée comme terminée', NOW()),
(12, 8, 3, 'Tâche créée', NOW()),
(13, 8, 6, 'Statut changé à EN_COURS', NOW()),
(14, 9, 3, 'Tâche créée', NOW());

-- 6. Notifications (dépend des utilisateurs)
INSERT INTO notifications (id, user_id, title, message, created_at, is_read) VALUES
(1, 2, 'Nouvelle tâche assignée', 'Vous avez été assigné à la tâche "Configuration du serveur"', NOW() - INTERVAL '3 day', false),
(2, 2, 'Modification de priorité', 'La priorité de la tâche "Développement Frontend" a été modifiée', NOW() - INTERVAL '2 day', false),
(3, 3, 'Nouvelle tâche assignée', 'Vous avez été assigné à la tâche "Développement iOS"', NOW() - INTERVAL '2 day', true),
(4, 3, 'Ajout au projet', 'Vous avez été ajouté au projet "Refonte Site Web"', NOW() - INTERVAL '1 day', false),
(5, 4, 'Tâche terminée', 'La tâche "Design UI/UX" a été marquée comme terminée', NOW(), false),
(6, 6, 'Modification de priorité', 'La priorité de la tâche "Design System" a été augmentée', NOW() - INTERVAL '12 hour', false); 