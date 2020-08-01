$(function(){
  function buildHTML(record){
    let html =
    `<div class="date__box">
      <div class="date__box__item">
          ${record.date}
        </div>
        <div class="date__box__item">
          ${record.start_time}
        </div>
        <div class="date__box__item">
          ${record.end_time}
        </div>
        <div class="date__box__item">
          ${record.major_class}
        </div>
        <div class="date__box__item">
          ${record.middle_class}
        </div>
        <div class="date__box__item">
          ${record.small_class}
        </div>
      </div>`
    return html;
  }

  $('.form').on('submit', function(e){
    e.preventDefault()
    console.log("hoge")
    let formData = new  FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.date').append(html);
      $('.date').animate({ scrollTop: $('.date__box')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled',false)
    })
    .fail(function() {
      alert("送信に失敗しました");
    })
  });
});