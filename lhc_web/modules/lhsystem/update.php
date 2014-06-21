<?php

if ((string)$Params['user_parameters_unordered']['action'] == 'statusdb' || (string)$Params['user_parameters_unordered']['action'] == 'statusdbdoupdate') {
	$tpl = erLhcoreClassTemplate::getInstance( 'lhsystem/update/statusdb.tpl.php');
	
	if ((string)$Params['user_parameters_unordered']['action'] == 'statusdbdoupdate'){
		erLhcoreClassUpdate::doTablesUpdate(json_decode( base64_decode($_POST['data']),true));
	}
	
	$tables = erLhcoreClassUpdate::getTablesStatus(json_decode(base64_decode($_POST['data']),true));
	$tpl->set('tables',$tables);
	echo json_encode(array('result' => $tpl->fetch()));
	exit;
}

$tpl = erLhcoreClassTemplate::getInstance( 'lhsystem/update.tpl.php');
$Result['content'] = $tpl->fetch();
$Result['path'] = array(array('url' => erLhcoreClassDesign::baseurl('system/configuration'),'title' => erTranslationClassLhTranslation::getInstance()->getTranslation('system/htmlcode','System configuration')),
array('title' => erTranslationClassLhTranslation::getInstance()->getTranslation('system/update','Live Helper Chat update information')));


?>