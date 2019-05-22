// NOTE: To generate a perceptual hash of a Jimp image, based on the pHash algorithm:
// image.hash(); // aHgG4GgoFjA

const Jimp = require('jimp');
const fsp = require('fs').promises;

const blackAndWhite = (sourceBase, targetBase) => source => {
  return Jimp
  .read(sourceBase + source)
  .then(img => {
    return img
      .greyscale()
      .write(targetBase + source);
  })
  .catch(err => {
    console.error(err);
  });
}

const blackAndWhiteBatch = (sourceBase, targetBase) => sources => {
  const promises = sources.map(blackAndWhite(sourceBase, targetBase));

  Promise.all(promises).then(() => console.log('success!'))
} 

fsp
.readdir('sources')
.then(
  blackAndWhiteBatch('sources/', '../www/public/static/')
);