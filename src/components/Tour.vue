<template lang="pug">
  .popover.tour
    .arrow
    h3.popover-title
    .popover-content
    .popover-navigation
      button.btn.btn-default(data-role='prev') &laquo; Prev
      |  
      span(data-role='separator') |
      |  
      button.btn.btn-default(data-role='next') Next &raquo;
    |  
    button.btn.btn-default(data-role='end') End tour
</template>
