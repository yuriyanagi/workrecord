class RecordsController < ApplicationController
  
  def index
    @records = Record.all
    @record = Record.new
  end

  def create
    @record = Record.new(record_params)
    @record.save
  end

  private
  def record_params
    params[:record]
    params.require(:record).permit(:date, :start_time, :end_time, :major_class, :middle_class, :small_class)
  end

end