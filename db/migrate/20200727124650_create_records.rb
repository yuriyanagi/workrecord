class CreateRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :records do |t|
      t.date :date, null: false
      t.time :start_time, null: false
      t.time :end_time, null: false
      t.string :major_class, null: false
      t.string :middle_class, null: false
      t.string :small_class, null: false
      t.timestamps
    end
  end
end
