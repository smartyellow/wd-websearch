<script>

import { engines, logos } from '../../engines';
import { translate } from 'helpers/webdesq/stores.js';

export let language = 'en';
export let widget = {};
export const settings = {
  title: {
    type: 'string',
    label: translate('title', language),
  },
  engine: {
    type: 'select',
    options: Object.keys(engines),
    label: translate('search engine', language),
  },
};

let input;
$: placeholder = translate('Search the web using <m>', [ widget.engine, language ]);

function search() {
  const url = engines[widget.engine];
  const query = encodeURIComponent(input);
  const location = url + query;
  window.open(location, '_blank').focus();
  input = '';
}

</script>

<p class="logo">
  <a href={engines[widget.engine]} target="_blank">
    <img src={logos[widget.engine]} alt={placeholder} />
  </a>
</p>

<form on:submit|preventDefault={search}>
  <input id="searchbox" type="search" bind:value={input} {placeholder} />
  <button id="submit" on:click|preventDefault={search}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
      <path fill="currentColor" d="M505 442.7 405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/>
    </svg>
  </button>
</form>

<style>
  p, form {
    text-align: center;
    background-color: transparent;
    margin: 0;
    padding: 10px;
  }
  .logo img {
    max-width: 80%;
    max-height: 50px;
  }
  form {
    display: flex;
  }
  form > * {
    border-radius: 0;
    border: 1px solid #37379c;
    padding: 10px;
    margin: 0;
  }
  form :first-child {
    border-radius: 50px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  form :last-child {
    border-radius: 50px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  form button {
    background-color: #37379c;
    color: #ffffff;
    cursor: pointer;
    flex: 0 1;
  }
  form button svg {
    vertical-align: text-top;
  }
  form input {
    flex: 1 0;
    color: #000000;
  }
</style>
