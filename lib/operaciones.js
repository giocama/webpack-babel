"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludos = exports.nultiplicacion = exports.resta = exports.suma = void 0;

var suma = function suma(num1, num2) {
  return num1 + num2;
};

exports.suma = suma;

var resta = function resta(num1, num2) {
  return num1 - num2;
};

exports.resta = resta;

var nultiplicacion = function nultiplicacion(num1, num2) {
  return num1 * num2;
};

exports.nultiplicacion = nultiplicacion;
var saludos = 'Hola, soy Giovanni, saludos desde un modulo';
exports.saludos = saludos;