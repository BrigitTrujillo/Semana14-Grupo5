const VueloModel = require("../models/Vuelo");
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.pdfMake.vfs;

exports.crearVuelo = async (req, res) => {
  try {
    const vuelo = req.body;
    await VueloModel.create(vuelo);
    res.send(vuelo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerVuelos = async (req, res) => {
  try {
    const vuelos = await VueloModel.find().populate("piloto").populate("avion");
    res.json(vuelos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarVuelo = async (req, res) => {
  try {
    const { _id, num_vuelo, origen, destino, hora, fecha, piloto, avion } =
      new VueloModel(req.body);
    let vuels = await VueloModel.findById(req.params.id);

    if (!vuels) {
      res.status(404).json({ msg: "No existe el vuelo" });
    }

    num_vuelo._id = _id;
    vuels.num_vuelo = num_vuelo;
    vuels.origen = origen;
    vuels.destino = destino;
    vuels.hora = hora;
    vuels.fecha = fecha;
    vuels.piloto = piloto;
    vuels.avion = avion;

    console.log(vuels);

    vuels = await VueloModel.findOneAndUpdate({ _id: req.params.id }, vuels, {
      new: true,
    });
    res.json(vuels);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.verVuelo = async (req, res) => {
  try {
    let vuels = await VueloModel.findById(req.params.id);

    if (!vuels) {
      res.status(404).json({ msg: "No existe el vuelo" });
    }

    res.json(vuels);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.eliminarVuelo = async (req, res) => {
  try {
    let vuels = await VueloModel.findById(req.params.id);

    if (!vuels) {
      res.status(404).json({ msg: "No existe el vuelo" });
    }

    await VueloModel.deleteOne({ _id: req.params.id });

    res.json({ msg: "El vuelo: " + vuels.num_vuelo + " se ha eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.generarPDF = async (req, res) => {
  try {
    const vuelos = await VueloModel.find();

    const documentDefinition = {
      content: [
        { text: "Reporte de Vuelos", style: "header" },
        { text: "\n" },
        {
          table: {
            headerRows: 1,
            widths: ["*", "auto", 100, "*"],
            body: [
              [
                { text: "Num Vuelo", bold: true },
                { text: "Origen", bold: true },
                { text: "Destino", bold: true },
                { text: "Fecha", bold: true },
              ],
            ],
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: "center",
        },
      },
    };
    for (let i = 0; i < vuelos.length; i++) {
      const vuelo = vuelos[i];
      documentDefinition.content[2].table.body.push([
        vuelo.num_vuelo,
        vuelo.origen,
        vuelo.destino,
        vuelo.fecha,
      ]);
    }

    const pdfDoc = pdfMake.createPdf(documentDefinition);

    pdfDoc.getBuffer((buffer) => {
      res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline; filename=lista_vuelos.pdf",
        "Content-Length": buffer.length,
      });

      res.end(buffer);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al generar el PDF");
  }
};