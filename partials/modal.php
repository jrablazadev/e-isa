
<style>
div#cb-modal-body {
    display: flex;
    justify-content: center;
}
</style>

<div id="cb-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="cb-modal-title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="cb-modal-body" class="cb-form-fluid cb-form-resp"></div>
        <div id="cb-modal-error" class="d-none alert alert-danger"></div>

      </div>
    </div>
  </div>
</div>