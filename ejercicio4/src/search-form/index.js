/**
 * Module Dependencies
 */

import $ from 'jquery'
import $tvShowsContainer from 'src/tv-shows-container'
import { searchShows } from 'src/tvmaze-api-client'
import renderShows from 'src/render'

$('#app-body')
  .find('form')
  .submit(function (ev) {
    ev.preventDefault();
    var busqueda = $(this)
      .find('input[type="text"]')
      .val();

    $tvShowsContainer.find('.tv-show').remove()
    var $loader = $('<div class="loader">');
    $loader.appendTo($tvShowsContainer);
    searchShows(function (res) {
      $loader.remove();
      var shows = res.map(function (el) {
        return el.show;
      })

      renderShows(shows);
    })
  })