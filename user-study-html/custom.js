var container, alpha, beta;

function next_page(url){
  var timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  url = url+'?t1='+timeSpentOnPage;
  console.log(timeSpentOnPage);
  
  window.open(url, "_self");
}

function get_priors(condition) {
  container = document.querySelectorAll('.r2d3');
  str_alpha = container[0].shadowRoot.querySelector(".text-eff-prior").innerHTML;
  prior_alpha = str_alpha.split(" ")[2];
  str_beta = container[1].shadowRoot.querySelector(".text-eff-prior").innerHTML;
  prior_beta = str_beta.split(" ")[2];
  
  var urlParams = new URLSearchParams(window.location.search);
  var t1 = urlParams.get('t1');
  var t2 = TimeMe.getTimeOnCurrentPageInSeconds();
  
  url = 'https://umich.qualtrics.com/jfe/form/SV_ebP6FaVE8j2JzZH?cond='+condition+'&alpha='+prior_alpha+'&beta='+prior_beta+'&t1='+t1+'&t2='+t2 ;
  
  window.open(url, "_blank");
}

function show_section(id) {
  $('div#'+id).css('visibility', 'visible');
  
  if (id == 'interactive-visualization') {
    $('div#part-2').css('visibility', 'visible');
  }
  
  console.log(id);
  
  $('button.'+id+'-btn').hide();
}

$("#btn-pg-2").click(function(){
		text = $(this).text().split(" ")[0];
    
    if (text == "Show") {
    		$('div#description').css('display', 'inherit');
    } else {
    		$('div#description').css('display', 'none');
    }
    
		$(this).text(function(i, text){
          return text === "Show description" ? "Hide description" : "Show description";
     });
} );