<?php $modalHeaderTitle = erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Block visitor')?>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/modal_header.tpl.php'));?>
<div id="block-bloc-<?php echo $chat->id?>"></div>
<form id="block-form">

    <div class="row">
        <div class="col-6">
            <div class="form-group">
                <?php include(erLhcoreClassDesign::designtpl('lhchat/blockuser/blockoptions.tpl.php'));?>
            </div>
        </div>
        <div class="col-6">
            <ul>
                <?php foreach (erLhcoreClassModelChatBlockedUser::isBlocked(array('online_user_id' => $chat->online_user_id, 'return_block' => true, 'country_code' => $chat->country_code, 'ip' => $chat->ip, 'dep_id' => $chat->dep_id, 'nick' => $chat->nick, 'email' => $chat->email)) as $blockItem) : ?>
                    <li><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Bocked by')?>&nbsp;<a target="_blank" href="<?php echo erLhcoreClassDesign::baseurl('chat/blockedusers')?>?id=<?php echo $blockItem->id?>"><span class="material-icons">open_in_new</span><b><?php echo $blockItem->id?></b></a>&nbsp;

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_IP,erLhcoreClassModelChatBlockedUser::BLOCK_ALL_IP_NICK,erLhcoreClassModelChatBlockedUser::BLOCK_ALL_IP_NICK_DEP])) : ?>
                            <span class="badge badge-secondary">IP</span>
                        <?php endif; ?>

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_NICK,erLhcoreClassModelChatBlockedUser::BLOCK_ALL_IP_NICK])) : ?>
                            <span class="badge badge-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Nick');?></span>
                        <?php endif; ?>

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_COUNTRY])) : ?>
                            <span class="badge badge-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Country');?></span>
                        <?php endif; ?>

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_NICK_DEP,erLhcoreClassModelChatBlockedUser::BLOCK_ALL_IP_NICK_DEP])) : ?>
                            <span class="badge badge-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Nick and Department');?></span>
                        <?php endif; ?>

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_EMAIL])) : ?>
                            <span class="badge badge-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','E-mail');?></span>
                        <?php endif; ?>

                        <?php if (in_array($blockItem->btype, [erLhcoreClassModelChatBlockedUser::BLOCK_ONLINE_USER])) : ?>
                            <span class="badge badge-secondary" title="<?php echo $blockItem->online_user_id?>"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Online user');?></span>
                        <?php endif; ?>
                    </li>
                <?php endforeach; ?>
            </ul>
        </div>
    </div>

    <div class="form-group">
        <label><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Expires')?></label>
        <select class="form-control form-control-sm" name="expires" id="block-expires">
            <option value="3">3 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days (cool off)')?></option>
            <option value="15">15 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="30">30 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="60">60 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="90">90 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="120">120 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="240">240 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="360">360 <?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','days')?></option>
            <option value="0"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Permanent/unlimited')?></option>
        </select>
    </div>
    <button type="button" onclick="blockByChat()" class="btn btn-sm btn-secondary"><?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/blockedusers','Block')?></button>
</form>
<script>
    function blockByChat(){
        $.postJSON(WWW_DIR_JAVASCRIPT + 'chat/blockuser/<?php echo $chat->id?>', $('#block-form').serialize(), function(data){
            $('#block-bloc-<?php echo $chat->id?>').html(data.result);
            if (!data.error) {
                setTimeout(function (){
                    $('#myModal').modal('hide');
                },2000);
            }
        });
    }
</script>
<?php include(erLhcoreClassDesign::designtpl('lhkernel/modal_footer.tpl.php'));?>