<nav class="navbar navbar-expand-lg navbar-dark primary-nav bg-dark w-100" style="display: inline-table !important">
	<div class="container-fluid">
	<a class="navbar-brand pointer-event-none" href="#"> E-ISA</a>
	<a class="pointer-event-none small cb-text-grey text-right" href="#">View Details</a>

		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbar">
			<ul class="navbar-nav ml-auto">
				<li class="nav-item" id="nav-dd">
					<a class="nav-link" href="https://stage.caspio.com/demo/singlesource/isa_calculator/calculator/login.php">
						<i class="fas fa-table"></i> Back to E-ISA Portal
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="<?= $cb_thenetwork_link ?>login.php">
						<i class="fas fa-atom"></i> Back to The Network
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<div class="d-none cb-logout-container"></div>

<script>
	var loggedOut = false;

	function logout()
	{
		if(loggedOut)
		{
			return false;
		}

		$('.cb-logout-container').html(' <iframe class="cb-logout-iframe" src="<?= $cb_logout_url ?>" onload="redirect()"></iframe> ');
		loggedOut = true;
	}

	function redirect()
	{
		window.location.href = './login.php';
	}
</script>