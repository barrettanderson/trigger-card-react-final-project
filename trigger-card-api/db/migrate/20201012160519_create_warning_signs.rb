class CreateWarningSigns < ActiveRecord::Migration[6.0]
  def change
    create_table :warning_signs do |t|
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
