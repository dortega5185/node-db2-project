exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments();

    tbl.string("name", 100).notNullable().unique();
    tbl.string("vin", 17).notNullable().unique();
    tbl.string("make", 25).notNullable();
    tbl.string("model", 25).notNullable();
    tbl.integer("mileage", 15).notNullable();

    tbl.string("transmission-type", 20);
    tbl.string("title-status", 15);

    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
