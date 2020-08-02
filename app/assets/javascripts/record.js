$(function(){
  function buildHTML(record){
    let html =
    `<div class="date__box">
      <div class="date__box__item__date">
          ${record.date}
        </div>
        <div class="date__box__item__start_time">
          ${record.start_time}
        </div>
        <div class="date__box__item__end_time">
          ${record.end_time}
        </div>
        <div class="date__box__item__major_class">
          ${record.major_class}
        </div>
        <div class="date__box__item__middle_class">
          ${record.middle_class}
        </div>
        <div class="date__box__item__small_class">
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
      $('.date').animate({ scrollTop: $('.date')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled',false)
    })
    .fail(function() {
      alert("送信に失敗しました");
    })
  });
});