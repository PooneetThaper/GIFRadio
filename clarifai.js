const Clarifai = require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.clarifai_api_key
});

const extract_tags = (frames) => {
  let tags = new Set();
  frames.forEach((frame) => {
    let concepts = frame.data.concepts;
    concepts.forEach((concept) => {
      tags.add(concept.name);
    });
  });
  return tags;
}

exports.get_tags = (video_url, super_resolve, super_reject) => {
  app.models.predict(Clarifai.GENERAL_MODEL, video_url, {video: true}).then((response) => {
    super_resolve(extract_tags(response.outputs[0].data.frames));
   });
 }
