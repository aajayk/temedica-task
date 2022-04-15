const index = require("../routes/routes");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", index);

test("root endpoint works", (done) => {
  request(app).get("/api/v1").expect("Content-Type", /json/).expect(200, done);
});

test("incorrect endpoint", (done) => {
  request(app).get("/api/v1/abcd").expect(404, done);
});

test("drugList endpoint works", (done) => {
  request(app)
    .get("/api/v1/drugList")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

test("drugList endpoint works with page number & size ", (done) => {
  request(app)
    .get("/api/v1/drugList?page=1&size=2")
    .expect("Content-Type", /json/)
    .expect(200, done);
});

test("drugList endpoint works with last page ", (done) => {
  request(app)
    .get("/api/v1/drugList?page=100&size=2")
    .expect("Content-Type", /json/)
    .expect(200, done);
});
