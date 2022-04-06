(function() {
  const main = document.querySelector('main')
  const searchForm = document.querySelector('[data-search-form]')
  const searchInput = document.querySelector('[data-search-input]')

  console.log('client')
  
  const onInput = debounce((e) =>  {
    const query = e.target.value
    const url = searchForm.getAttribute('action')

    history.replaceState({}, '', '/search?query=' + query)

    fetch(url + '?query=' + query + '&async=true')
      .then(res => res.text())
      .then(html => {
        main.innerHTML = html
      })
  }, 250)

  searchInput.addEventListener('input', onInput)

  // From https://davidwalsh.name/javascript-debounce-function
  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
}())
