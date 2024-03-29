// MIKE: add a check to see if the hash of the source is = to any existing files
// and skip them so

// NOTE: To generate a perceptual hash of a Jimp image, based on the pHash algorithm:
// image.hash(); // aHgG4GgoFjA

const Jimp = require('jimp');
const fsp = require('fs').promises;

const processImage = (sourceBase, targetBase) => source => {
  return Jimp
  .read(sourceBase + source)
  .then(img => {
    var ret = img
      // MIKE: resize this after you crop - not before
      .resize(Jimp.AUTO, 700)
      .greyscale()
      .write(targetBase + source);

    if (source == "gallery-hero.jpg") {
      ret = ret.crop(30, 0, 900, 450);
    }

    if (source == "event-2019-001.jpg") {
      ret = ret.crop(0, 150, 900, 450);
    }

    if (source == "donate-hero.jpg") {
      ret = ret.crop(0, 0, 700, 450);
    }

    return ret
      // .posterize(6)
      .write(targetBase + source);
  })
  .catch(err => {
    console.error(err);
  });
}

const processImageBatch = (sourceBase, targetBase) => sources => {
  const promises = sources.map(processImage(sourceBase, targetBase));

  Promise.all(promises).then(() => console.log('success!'))
}

fsp
.readdir('sources')
.then(
  processImageBatch('sources/', '../www/public/static/')
);