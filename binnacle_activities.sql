-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-02-2023 a las 18:15:37
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `binnacle_activities`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `activities`
--

CREATE TABLE `activities` (
  `id_activitie` int(11) NOT NULL,
  `date_end` date NOT NULL,
  `date_start` date NOT NULL,
  `description` longtext NOT NULL,
  `working_hours` int(11) NOT NULL,
  `area_id_area` int(11) DEFAULT NULL,
  `project_manager_id_pro_man` int(11) DEFAULT NULL,
  `provider_id_provider` int(11) DEFAULT NULL,
  `id_area` int(11) DEFAULT NULL,
  `id_pro_man` int(11) DEFAULT NULL,
  `id_provider` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `activities`
--

INSERT INTO `activities` (`id_activitie`, `date_end`, `date_start`, `description`, `working_hours`, `area_id_area`, `project_manager_id_pro_man`, `provider_id_provider`, `id_area`, `id_pro_man`, `id_provider`) VALUES
(1, '2023-02-14', '2023-02-28', 'Migrar BD.', 8, 1, 1, 1, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `areas`
--

CREATE TABLE `areas` (
  `id_area` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `areas`
--

INSERT INTO `areas` (`id_area`, `name`) VALUES
(1, 'Desarrollo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `binnacles`
--

CREATE TABLE `binnacles` (
  `id_binnacle` int(11) NOT NULL,
  `archive` blob NOT NULL,
  `name` varchar(150) NOT NULL,
  `type` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `binnacles`
--

INSERT INTO `binnacles` (`id_binnacle`, `archive`, `name`, `type`) VALUES
(1, '', 'ProjectName1Ex_Fecha', 'Excel'),
(2, '', 'ProjectName2Wo_Fecha', 'Word');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `binnacles_projects`
--

CREATE TABLE `binnacles_projects` (
  `id_bin_pro` int(11) NOT NULL,
  `id_binnacle` int(11) DEFAULT NULL,
  `id_project` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `binnacles_projects`
--

INSERT INTO `binnacles_projects` (`id_bin_pro`, `id_binnacle`, `id_project`) VALUES
(1, 1, 1),
(2, 2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id_project` int(11) NOT NULL,
  `description` longtext NOT NULL,
  `name` varchar(150) NOT NULL,
  `title` varchar(150) NOT NULL,
  `working_hours` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id_project`, `description`, `name`, `title`, `working_hours`) VALUES
(1, 'Los usuarios normales generarán de forma automática bitácoras llenando un formulario, y existirán usuarios especiales que auditarán la fecha de entrega de estas bitácoras.', 'Automatización para la captura de bitácoras.', 'Captura de Bitácoras.', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `project_manager`
--

CREATE TABLE `project_manager` (
  `id_pro_man` int(11) NOT NULL,
  `id_project` int(11) DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `project_manager`
--

INSERT INTO `project_manager` (`id_pro_man`, `id_project`, `id_role`, `id_user`) VALUES
(1, 1, 2, 6),
(2, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `providers`
--

CREATE TABLE `providers` (
  `id_provider` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `providers`
--

INSERT INTO `providers` (`id_provider`, `name`) VALUES
(1, 'NEORIS de México S.A de C.V.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id_role` int(11) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id_role`, `description`) VALUES
(1, 'Product Owner'),
(2, 'Scrum Master'),
(3, 'Team Developer');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `m_last_name` varchar(150) NOT NULL,
  `mail` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `p_last_name` varchar(150) NOT NULL,
  `password` longtext NOT NULL,
  `id_workstation` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_user`, `m_last_name`, `mail`, `name`, `p_last_name`, `password`, `id_workstation`) VALUES
(1, 'de la Rosa', 'e-cdramirez@neoris.com', 'Cristian David', 'Ramírez', '123456', 1),
(2, 'Pacheco', 'e-appacheco@neoris.com', 'Alberto', 'Pacheco', '123456', 2),
(3, 'González', 'e-jarteaga@neoris.com', 'Jaqueline', 'Arteaga', '123456', 3),
(4, 'Ceja', 'e-daarroyo@neoris.com', 'Daniel Alexis', 'Arroyo', '123456', 4),
(5, 'Rivas', 'e-drivas@neoris.com', 'Daniel', 'Flores', '123456', 5),
(6, 'Reyes', 'e-lfrodriguez1@neoris.com', 'Luis Felipe', 'Rodríguez', '123456', 1),
(7, 'Petul', 'e-pesanchez@neoris.com', 'Pedro Emmanuel', 'Sánchez', '123456', 2),
(8, 'Reyes', 'e-sarojas@neoris.com', 'Saúl Adrián', 'Rojas', '123456', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `workstations`
--

CREATE TABLE `workstations` (
  `id_workstation` int(11) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `workstations`
--

INSERT INTO `workstations` (`id_workstation`, `description`) VALUES
(4, 'Desarrollador'),
(3, 'Líder Estratégico'),
(2, 'Líder Técnico'),
(1, 'Project Manager'),
(5, 'Tester');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id_activitie`),
  ADD KEY `FKjilbwy6bqm4r2e5yej31wckd9` (`area_id_area`),
  ADD KEY `FKq9j7m4ckkqkugadxmbgqp21di` (`project_manager_id_pro_man`),
  ADD KEY `FK15qb8fc8p9u775ynexivv5gmk` (`provider_id_provider`),
  ADD KEY `FKqmb2ngw5wtov6pu0f3qpvppd7` (`id_area`),
  ADD KEY `FK6q05eb3y5xv7p0nxe2hutds3t` (`id_pro_man`),
  ADD KEY `FKo8b905c5xe3mrg119459qwks9` (`id_provider`);

--
-- Indices de la tabla `areas`
--
ALTER TABLE `areas`
  ADD PRIMARY KEY (`id_area`),
  ADD UNIQUE KEY `UKhi904f99sd3n84jwi9sjkl46g` (`name`);

--
-- Indices de la tabla `binnacles`
--
ALTER TABLE `binnacles`
  ADD PRIMARY KEY (`id_binnacle`),
  ADD UNIQUE KEY `UKa90g9pom0fllghu7is6jl8abn` (`name`);

--
-- Indices de la tabla `binnacles_projects`
--
ALTER TABLE `binnacles_projects`
  ADD PRIMARY KEY (`id_bin_pro`),
  ADD KEY `FK9kq9ev51w2n3cgngxsd7619dc` (`id_binnacle`),
  ADD KEY `FK21ac264jgj5nx2co1ws3fkqep` (`id_project`);

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id_project`),
  ADD UNIQUE KEY `UKnbxfb0fudfi636ru3dq1cdsyo` (`name`,`title`);

--
-- Indices de la tabla `project_manager`
--
ALTER TABLE `project_manager`
  ADD PRIMARY KEY (`id_pro_man`),
  ADD KEY `FKpdncwb1llc5hog9vggk4o2012` (`id_project`),
  ADD KEY `FKer2i11b836uo1u8o8v51xl98m` (`id_role`),
  ADD KEY `FKonrxq1h6uwo9c0g0xx4ciw91t` (`id_user`);

--
-- Indices de la tabla `providers`
--
ALTER TABLE `providers`
  ADD PRIMARY KEY (`id_provider`),
  ADD UNIQUE KEY `UKfuh4835foq2trqy6ur286u3s0` (`name`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_role`),
  ADD UNIQUE KEY `UK2op45rew8nnd6adyi86qeqk50` (`description`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `UKjhck7kjdogc7yia7qamc89ypv` (`mail`),
  ADD KEY `FK6ftjo1mfjl2j5ojlrky82oei8` (`id_workstation`);

--
-- Indices de la tabla `workstations`
--
ALTER TABLE `workstations`
  ADD PRIMARY KEY (`id_workstation`),
  ADD UNIQUE KEY `UKqr8iybumf9godevgnmqmopktm` (`description`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `activities`
--
ALTER TABLE `activities`
  MODIFY `id_activitie` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `areas`
--
ALTER TABLE `areas`
  MODIFY `id_area` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `binnacles`
--
ALTER TABLE `binnacles`
  MODIFY `id_binnacle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `binnacles_projects`
--
ALTER TABLE `binnacles_projects`
  MODIFY `id_bin_pro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `project_manager`
--
ALTER TABLE `project_manager`
  MODIFY `id_pro_man` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `providers`
--
ALTER TABLE `providers`
  MODIFY `id_provider` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id_role` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `workstations`
--
ALTER TABLE `workstations`
  MODIFY `id_workstation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `FK15qb8fc8p9u775ynexivv5gmk` FOREIGN KEY (`provider_id_provider`) REFERENCES `providers` (`id_provider`),
  ADD CONSTRAINT `FK6q05eb3y5xv7p0nxe2hutds3t` FOREIGN KEY (`id_pro_man`) REFERENCES `project_manager` (`id_pro_man`),
  ADD CONSTRAINT `FKjilbwy6bqm4r2e5yej31wckd9` FOREIGN KEY (`area_id_area`) REFERENCES `areas` (`id_area`),
  ADD CONSTRAINT `FKo8b905c5xe3mrg119459qwks9` FOREIGN KEY (`id_provider`) REFERENCES `providers` (`id_provider`),
  ADD CONSTRAINT `FKq9j7m4ckkqkugadxmbgqp21di` FOREIGN KEY (`project_manager_id_pro_man`) REFERENCES `project_manager` (`id_pro_man`),
  ADD CONSTRAINT `FKqmb2ngw5wtov6pu0f3qpvppd7` FOREIGN KEY (`id_area`) REFERENCES `areas` (`id_area`);

--
-- Filtros para la tabla `binnacles_projects`
--
ALTER TABLE `binnacles_projects`
  ADD CONSTRAINT `FK21ac264jgj5nx2co1ws3fkqep` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id_project`),
  ADD CONSTRAINT `FK9kq9ev51w2n3cgngxsd7619dc` FOREIGN KEY (`id_binnacle`) REFERENCES `binnacles` (`id_binnacle`);

--
-- Filtros para la tabla `project_manager`
--
ALTER TABLE `project_manager`
  ADD CONSTRAINT `FKer2i11b836uo1u8o8v51xl98m` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id_role`),
  ADD CONSTRAINT `FKonrxq1h6uwo9c0g0xx4ciw91t` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  ADD CONSTRAINT `FKpdncwb1llc5hog9vggk4o2012` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id_project`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK6ftjo1mfjl2j5ojlrky82oei8` FOREIGN KEY (`id_workstation`) REFERENCES `workstations` (`id_workstation`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
