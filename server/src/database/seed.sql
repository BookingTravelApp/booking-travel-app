INSERT INTO `roles` (`id`, `name`, `description`) VALUES
('147be472-e228-4a3f-a215-903e45b834f6', 'user', 'role nguoi dung'),
('164d54e7-8a25-4a96-9b83-c5b3bca69e9d', 'admin', 'role nguoi quan ly'),
('79419a9a-5968-43ff-9ef2-5659504602c4', 'employee', 'role nhan vien'),
('c6daa19c-e740-4116-a48b-79eee2ce6bcb', 'system', 'role he thong');

INSERT INTO `accounts` (`id`, `username`, `password`, `email`, `facebook_id`, `createdAt`, `updatedAt`) VALUES
('deaa2ee5-c344-46a0-8083-b396769173c3', 'userAdmin', '$argon2i$v=19$m=4096,t=3,p=1$xEnMUAQqjY8/ZMf3P98FWA$ZVW96vsdQtIkgiT/qBS8cGignrCvcvYI0ldk9DV7zSo', 'admin@gmail.com', NULL, '2022-05-13 17:41:06', '2022-05-13 17:41:06');
INSERT INTO `role_accounts` (`id`, `createdAt`, `updatedAt`, `roleId`, `accountId`) VALUES
('3fea482f-7574-4230-9c0f-771878874324', '2022-05-13 17:41:06', '2022-05-13 17:41:06', '164d54e7-8a25-4a96-9b83-c5b3bca69e9d', 'deaa2ee5-c344-46a0-8083-b396769173c3');
INSERT INTO `users` (`id`, `phone_number`, `gender`, `date_of_birth`, `active`, `avatar_path`, `accountId`, `slug`, `name`) VALUES
('73913856-bf4b-4525-b0c8-4645cebabcd3', NULL, NULL, NULL, 0, NULL, 'deaa2ee5-c344-46a0-8083-b396769173c3', NULL, NULL);