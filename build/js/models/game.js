define(["libs/date"],function(){var e=Backbone.Model.extend({defaults:{name:"Geen naam."},parse:function(e,t){return console.log(e),e.start_date=(new Date(e.start_time)).toString("d MMMM yyyy HH:mm"),e.start_day=(new Date(e.start_time)).toString("dddd - d MMMM yyyy"),e.start_time=(new Date(e.start_time)).toString("HH:mm"),e}});return e});