/**
 * EmojiController
 *
 * @description :: Server-side logic for managing emojis
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	//find: function(req, res){},
	//findOne: function(req, res){},
	//create: function(req, res){},
	//update: function(req, res){},
	//destroy: function(req, res){}
	random: function(req, res, next){
		res.ok({'number': Utils.getRandom(1,31) });
	}
};

