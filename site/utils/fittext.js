const fittext = (jQuery) => {
  const $ = jQuery;

  return function ( kompressor, options ) {
    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);
      var color = $this.css('color');
      $this.css('color', 'rgba(0,0,0,0)');
      var h = $this.height();
      var ph = $this.closest('.block-dynamic').innerHeight();
      var fs = 70;
      console.info(h, " vs ", ph);
      $this.css('fontSize', (fs-1)+'px');
      while( h > ph ) {
        fs -= 1;
        $this.css('fontSize', (fs)+'px');
        h = $this.height();
        ph = $this.closest('.block-dynamic').innerHeight();
        console.info(h, " vs ", ph);
      }
      $this.css('color', color);
    });
  };
};

export default fittext;
