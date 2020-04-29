var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var express = require('express');
var app = express();
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
/* GET home page. */
var API_PORT = 5000;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/express_backend', function (req, res) {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
router.post('/update', function (req, res, next) {
    console.log(req.body);
    var a = req.body.email;
    var b = req.body.date;
    var c = req.body.sessions;
    var d = req.body.deposits;
    var e = req.body.notes;
    console.log(a, b, c, d, e);
    var con = mysql.createConnection({
        host: "",
        user: "root",
        password: "",
        database: "deposits"
    });
    con.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        var sql = "UPDATE client SET email=?, date=?, amount=?, sessions=?, notes=? WHERE email=?";
        console.log(sql, d);
        con.query(sql, [a, b, d, c, e, a], function (err, result) {
            if (err)
                throw err;
            console.log("1 record updated");
        });
    });
    res.redirect("/menu");
});
router.post('/meeting', function (req, res, next) {
    console.log(req.body);
    var a = req.body.email;
    var b = req.body.date;
    var c = req.body.sessions;
    var d = req.body.deposits;
    var e = req.body.notes;
    console.log(a, b, c, d, e);
    var con = mysql.createConnection({
        host: "",
        user: "root",
        password: "!",
        database: "deposits"
    });
    con.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        var sql = "INSERT INTO client(email, date, amount, sessions, notes) VALUES (?,?,?,?,?)";
        console.log(sql, d);
        con.query(sql, [a, b, d, c, e], function (err, result) {
            if (err)
                throw err;
            console.log("1 record inserted");
        });
    });
    res.redirect("/menu");
});
router.post('/total', function (req, res, next) {
    console.log(req.body);
    var a = req.body.email;
    var b = req.body.sessions;
    b = (b - 1);
    if (b != 0) {
        var con = mysql.createConnection({
            host: "",
            user: "root",
            password: "",
            database: "deposits"
        });
        con.connect(function (err) {
            if (err)
                throw err;
            var sql = "UPDATE client SET sessions=? WHERE email=?";
            console.log(sql, b);
            con.query(sql, [b, a], function (err, result) {
                if (err)
                    throw err;
                console.log(result);
                res.json({ 'test': result });
            });
        });
    }
    else {
        var con = mysql.createConnection({
            host: "",
            user: "root",
            password: "",
            database: "deposits"
        });
        con.connect(function (err) {
            if (err)
                throw err;
            var sql = "DELETE FROM client WHERE email=?";
            console.log(sql, a);
            con.query(sql, [a], function (err, result) {
                if (err)
                    throw err;
                console.log(result);
                res.json({ 'test': result });
            });
        });
    }
});
router.post('/delete', function (req, res, next) {
    console.log(req.body);
    var a = req.body.email;
    var con = mysql.createConnection({
        host: "",
        user: "root",
        password: "",
        database: "deposits"
    });
    con.connect(function (err) {
        if (err)
            throw err;
        var sql = "DELETE FROM client WHERE email=?";
        console.log(sql, a);
        con.query(sql, [a], function (err, result) {
            if (err)
                throw err;
            console.log(result);
            res.json({ 'test': result });
        });
    });
});
router.post('/checkout', function (req, res, next) {
    console.log(req.body);
    var a = req.body.email;
    console.log(a);
    var con = mysql.createConnection({
        host: "",
        user: "root",
        password: "",
        database: "deposits"
    });
    con.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM client WHERE email=?";
        console.log(sql, a);
        con.query(sql, [a], function (err, result) {
            if (err)
                throw err;
            console.log(result);
            res.json({ title: result });
        });
    });
});
router.get('/checkout', function (req, res, next) {
    var con = mysql.createConnection({
        host: "",
        user: "root",
        password: "",
        database: "deposits"
    });
    con.connect(function (err) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            return __generator(this, function (_a) {
                promise = new Promise(function (resolve, reject) {
                    if (err)
                        throw err;
                    con.query("SELECT * FROM client", function (err, result, fields) {
                        if (err)
                            throw err;
                        console.log(result);
                        res.send(result);
                    });
                });
                return [2 /*return*/];
            });
        });
    });
});
app.use('/api', router);
app.listen(API_PORT, function () { return console.log("LISTENING ON PORT " + API_PORT); });
