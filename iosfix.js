//2.1.0屏蔽演示账号应用界面与直播相关的模块
defineClass('ZLAppViewController', {
    viewWillAppear: function(animated) {

        self.super().viewWillAppear(animated);
        self.navigationController().setNavigationBarHidden_animated(false, false);
        if (self.needRefresh()) {
            self.getUserRole();
        }

        self.setIsShowVideo(true);
    },
});
