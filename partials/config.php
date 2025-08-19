<?php
	// Globals Dev
	$cb_account_id = 'caspio.thenetwork-crm.com';
	$cb_appkey_prefix = '25d55000';

	/*
	// Globals Live
	$cb_account_id = ''; 
	$cb_appkey_prefix = '';
	*/

	$cb_domain = 'https://' . $cb_account_id;
	$cb_logout_url = $cb_domain . '/folderlogout';
	$cb_datapage_prefix = $cb_domain . '/dp/' . $cb_appkey_prefix;

	$cb_thenetwork_link = 1 ? 'https://thenetwork-crm.com/navigation/' : 'https://stage.caspio.com/demo/singlesource/navigation-stage/';

	$cb_subfolder = '';
	$cb_hitlist_details_link = '';

	$page_url = !empty($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';

	if(strpos($page_url, '/sm/'))
	{
		$cb_subfolder = 'store-manager';
	}
	else if(strpos($page_url, '/dom/'))
	{
		$cb_subfolder = 'dom';
	}
	else if(strpos($page_url, '/as/'))
	{
		$cb_subfolder = 'strat-team';
	}
	else if(strpos($page_url, '/csm/'))
	{
		$cb_subfolder = 'commercial-sales-manager';
	}
	// else if(strpos($page_url, '//'))
	// {
	// 	$cb_subfolder = 'technical-consultant';
	// }
	else if(strpos($page_url, '/rsm/'))
	{
		$cb_subfolder = 'rsm';
	}
	else if(strpos($page_url, '/rvpo/'))
	{
		$cb_subfolder = 'rvpo';
	}
	else if(strpos($page_url, '/vpas/'))
	{
		$cb_subfolder = 'vp-automotive-strat';
	}
	else if(strpos($page_url, '/vpcs/'))
	{
		$cb_subfolder = 'vp-commercial-strat';
	}
	else if(strpos($page_url, '/tsm/'))
	{
		$cb_subfolder = 'tsm';
	}
	else if(strpos($page_url, '/dsm/'))
	{
		$cb_subfolder = 'dsm';
	}
	else if(strpos($page_url, '/rvps/'))
	{
		$cb_subfolder = 'rvp';
	}
	else if(strpos($page_url, '/bdm/'))
	{
		$cb_subfolder = 'bdm';
	}
	else if(strpos($page_url, '/user-group/'))
	{
		$cb_subfolder = 'cl';
	}
	else if(strpos($page_url, '/kn/'))
	{
		$cb_subfolder = 'cl';
	}

	if(!empty($cb_subfolder))
	{
		$cb_hitlist_details_link = $cb_thenetwork_link.$cb_subfolder.'/'.'hit-list-detail.php?cbResetParam=1';
	}
?>

<script>
	var globalAccountId = "<?= $cb_account_id; ?>";
	var globalDataPagePrefix = "<?= $cb_datapage_prefix; ?>";
</script>