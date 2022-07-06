const articuloCtrl = {};
const Articulo = require("../models/Articulos")
articuloCtrl.getArticulos = async (req, res) => {
    const articulos = await Articulo.find()
    res.json(articulos);
}
articuloCtrl.createArticulo = async (req, res) => {
    var articulo = new Articulo();
    console.log(req.body);
    var params = req.body;
    articulo.nombre = params.nombre;
    articulo.precio = params.precio;
    articulo.descripcion = params.descripcion;
    articulo.imagen = 'Not yet';
    articulo.save((err, articuloStored) => {
        if (err)
            res.status(500).send({ message: 'Error saving articulo' });
        if (!articuloStored)
            res.status(404).send({ message: 'articulo not saved' });
        return res.status(200).send({ articulo: articuloStored });
    });
}

articuloCtrl.deleteArticulo = async (req, res) => {
    const { id } = req.params;
    await Articulo.findByIdAndDelete(id);
    res.json({ message: 'Articulo eliminado' });
}

articuloCtrl.updateArticulo = async (req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.findByIdAndUpdate(id, req.body, { new: true });
    console.log(req.body);
    res.json(articulo);
}

articuloCtrl.getArticulo = function (req, res) {

    Articulo.findById(req.params.id).exec((err, articulo) => {
        if (err) return res.status(500).send({ message: 'Error en la petición' });
        if (!articulo) return res.status(404).send({ message: 'El articulo no existe' });
        return res.status(200).send( articulo );
    });

    // const articulo = await Articulo.findById(req.params.id);
    // if (!articulo) return res.status(404).send({ message: 'articulo not found' });
    // return res.status(200).send({ articulo });
}

articuloCtrl.uploadImage = function (req, res) {
    var articuloID = req.params.id;
    var fileName = 'Imagen no subida';
    if (req.files) {
        console.log(req.files);

        var filePath = req.files.imagen.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[1];
        var extSplit = fileName.split('.');
        var fileExt = extSplit[1];
        console.log(fileName);
        console.log(filePath);
        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
            Articulo.findByIdAndUpdate(articuloID, { imagen: fileName }, { new: true }, (err, articuloUpdated) => {
                if (err) return res.status(500).send({ message: 'Error en la petición' });
                if (!articuloUpdated) return res.status(404).send({ message: 'El articulo no existe' });
                // return res.status(200).send({ articulo: articuloUpdated });
                return res.status(200).send({ message: 'Imagen subida correctamente' });
            });
        }
        else {
            fs.unlink(filePath, (err) => {
                return res.status(200).send({ message: 'Extensión de archivo no válida' });
            });
        }
    } else {
        return res.status(200).send({ message: 'No se ha subido ninguna imagen' });
    }
}

articuloCtrl.getImageFile = async (req, res) => {
    var fs = require('fs');
    var path = require('path');
    var file = req.params.image;
    var path_file = './uploads/' + file; fs.exists(path_file, (exists) => {
        if (exists) {
            return res.sendFile(path.resolve(path_file));
        } else {
            return res.status(200).send({ message: "No existe la imagen..." });
        }
    });
}


module.exports = articuloCtrl;