const request = require('supertest');
const express = require('express');
const assert = require('assert');
const app = express();

describe('GET /', function() {
  it('directs to home page', function(done) {
    inst = request('http://localhost:8080');
    inst.get('/')
    .expect(200, function(err,res){
      if (err != null){
      console.log(err);
      }
      assert(res.text.includes('<title>KDMundale</title>'));
      done();
    });
  });
});

describe('GET /projects', function() {
  it('directs to projects page', function(done) {
    inst = request('http://localhost:8080');
    inst.get('/projects')
    .expect(200, function(err,res){
      if (err != null){
      console.log(err);
      }
      assert(res.text.includes('<title>KDMundale-Projects</title>'));
      done();
    });
  });
});

describe('GET /work_history', function() {
  it('directs to work_history page', function(done) {
    inst = request('http://localhost:8080');
    inst.get('/work_history')
    .expect(200, function(err,res){
      if (err != null){
      console.log(err);
      }
      assert(res.text.includes('<title>KDMundale-Education/Work</title>'));
      done();
    });
  });
});

describe('GET /photography', function() {
  it('directs to photography page', function(done) {
    inst = request('http://localhost:8080');
    inst.get('/photography')
    .expect(200, function(err,res){
      if (err != null){
      console.log(err);
      }
      assert(res.text.includes('<title>KDMundale-Photography</title>'));
      done();
    });
  });
});

describe('GET /non/existant/page', function() {
  it('directs to non existant page', function(done) {
    inst = request('http://localhost:8080');
    inst.get('/nothing')
    .expect(404, function(err,res){
      if (err != null){
      console.log(err);
      }
      assert(res.text.includes('Cannot GET'));
      done();
    });
  });
});
