CREATE TABLE reports (
	id SERIAL PRIMARY KEY,
	license_plate TEXT NOT NULL,
	driver_id INT NOT NULL,
	speed INT NOT NULL
);

INSERT INTO reports (license_plate, driver_id, speed)
VALUES (7541313, 5574, 130);
INSERT INTO reports (license_plate, driver_id, speed)
VALUES (3555187, 1451, 180);
INSERT INTO reports (license_plate, driver_id, speed)
VALUES (3449617, 8329, 100);
