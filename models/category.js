var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

var Category = module.exports = mongoose.model('Category', categorySchema);

//Get all Articles
module.exports.getCategories = function(callback){
  Category.find(callback);
}

// Get Article by ID
module.exports.getCategoryById = function(id, callback){
  Category.findById(id, callback);
}

//Get category Articles
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category: category};
  Article.find(query, callback);
}

module.exports.createCategory = function(newCategory, callback){
  newCategory.save(callback);
}
