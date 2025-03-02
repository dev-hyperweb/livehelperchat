<?php

$Module = array( "name" => "Audit",
				 'variable_params' => true );

$ViewList = array();

$ViewList['configuration'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array( 'use' ),
);

$ViewList['loginhistory'] = array(
    'params' => array(),
    'uparams' => array('user_id'),
    'functions' => array( 'use' ),
);

$ViewList['logrecord'] = array(
    'params' => array('id'),
    'functions' => array( 'log_preview' ),
);

$ViewList['logjserror'] = array(
    'params' => array(),
    'uparams' => array(),
    'functions' => array(  ),
);

$FunctionList['use'] = array('explain' => 'Allow operator to configure audit module');
$FunctionList['logrecord'] = array('explain' => 'Allow operator to preview log record');

?>