var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
require('dotenv').config();

// Conexão MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://8210253:admin123@paw.nxjanlf.mongodb.net/';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado ao MongoDB');
  console.log("http://localhost:3000");
});

// Rotas API
var userRouter = require('./routes/user.routes');
var pacienteRouter = require('./routes/paciente.routes');
var nutricionistaRouter = require('./routes/nutricionista.routes');
var dietaRouter = require('./routes/dieta.routes');
var registoRouter = require('./routes/registo.routes');
var mensagemRouter = require('./routes/mensagem.routes');
var pedidoRouter = require('./routes/pedido.routes');

var app = express();

// Setup de views se necessário no futuro (ex: ejs)
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rotas da API
app.use('/api/users', userRouter);
app.use('/api/pacientes', pacienteRouter);
app.use('/api/nutricionistas', nutricionistaRouter);
app.use('/api/dietas', dietaRouter);
app.use('/api/registo', registoRouter);
app.use('/api/mensagens', mensagemRouter);
app.use('/api/pedidos', pedidoRouter);

// Rota padrão
app.get('/', function(req, res) {
  res.send('NutriTrack API Online');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}`);
});


module.exports = app;

