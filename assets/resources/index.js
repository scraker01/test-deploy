System.register("chunks:///_virtual/AnimationController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,o,i,r,e;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,i=t._decorator,r=t.Animation,e=t.Component}],execute:function(){var c;o._RF.push({},"3b037ewr3VP3ZvY1pV7wG3v","AnimationController",void 0);var a=i.ccclass;i.property,t("AnimationController",a("AnimationController")(c=function(t){function o(){for(var n,o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this).objectAnimation=void 0,n.currentClip=void 0,n}n(o,t);var i=o.prototype;return i.playAnimation=function(t){this.currentClip!=t&&(this.objectAnimation.play(t),this.currentClip=t)},i.setObjectToAnimation=function(t){this.objectAnimation=t.getComponent(r),this.currentClip=this.objectAnimation.defaultClip.toString()},o}(e))||c);o._RF.pop()}}}));

System.register("chunks:///_virtual/CameraController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,r,i,a,o,s,n,l,c,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,n=e.Node,l=e.CCFloat,c=e.Vec3,p=e.Component}],execute:function(){var u,y,h,m,P,C,f,g,b;o._RF.push({},"ab6194SAhBKkJdVisAC66EO","CameraController",void 0);var d=s.ccclass,v=s.property;e("CameraController",(u=d("CameraController"),y=v({type:n}),h=v({type:n}),m=v({type:l}),u((f=t((C=function(e){function t(){for(var t,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o))||this,i(t,"camera",f,a(t)),i(t,"player",g,a(t)),i(t,"camAngle",b,a(t)),t.playerPos=void 0,t.currentCamPos=void 0,t.camToPlayerDist=void 0,t}r(t,e);var o=t.prototype;return o.start=function(){this.currentCamPos=this.camera.getPosition(),this.playerPos=this.player.getPosition(),this.camToPlayerDist=new c(this.playerPos.x-this.currentCamPos.x,this.playerPos.y-this.currentCamPos.y,this.playerPos.z-this.currentCamPos.z)},o.update=function(e){this.currentCamPos=this.camera.getPosition(),this.playerPos=this.player.getPosition(),this.camera.setPosition(new c(this.playerPos.x,this.currentCamPos.y,this.playerPos.z+3))},t}(p)).prototype,"camera",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(C.prototype,"player",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=t(C.prototype,"camAngle",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=C))||P));o._RF.pop()}}}));

System.register("chunks:///_virtual/EnemyController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,o,i;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,r=e._decorator,o=e.MeshRenderer,i=e.Component}],execute:function(){var c;n._RF.push({},"9eefeG+s/lAII1oNczMyPb8","EnemyController",void 0);var s=r.ccclass;r.property,e("EnemyController",s("EnemyController")(c=function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).meshRenderer=void 0,t.mat=void 0,t.idxMat=void 0,t}t(n,e);var r=n.prototype;return r.start=function(){this.meshRenderer=this.getComponent(o),this.mat=this.meshRenderer.getRenderMaterial(0)},r.update=function(e){},r.changeMesh=function(){var e=this;this.node.active=!1,this.scheduleOnce((function(){e.node.active=!0}),1)},n}(i))||c);n._RF.pop()}}}));

System.register("chunks:///_virtual/HitboxController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var o,e,n,i,r,c,s,l,u;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy,n=t._decorator,i=t.BoxCollider,r=t.RigidBody,c=t.input,s=t.Input,l=t.KeyCode,u=t.Component}],execute:function(){var a;e._RF.push({},"d9654cUL19Db7oP7uhzJqlE","HitboxController",void 0);var d=n.ccclass;n.property,t("HitboxController",d("HitboxController")(a=function(t){function e(){for(var o,e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return(o=t.call.apply(t,[this].concat(n))||this).collider=void 0,o.rb=void 0,o}o(e,t);var n=e.prototype;return n.start=function(){this.collider=this.getComponent(i),this.rb=this.getComponent(r),this.rb.useCCD=!0,c.on(s.EventType.KEY_DOWN,this.keydown,this),this.node.active=!1},n.keydown=function(t){var o=this;switch(t.keyCode){case l.KEY_J:this.node.active=!0,this.scheduleOnce((function(){o.node.active&&(o.node.active=!1)}),.25)}},e}(u))||a);e._RF.pop()}}}));

System.register("chunks:///_virtual/HurtboxController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./EnemyController.ts"],(function(e){var o,t,r,n,i,l,s,c,a,u;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,l=e._decorator,s=e.CapsuleCollider,c=e.RigidBody,a=e.Component},function(e){u=e.EnemyController}],execute:function(){var d,p,h,C,g;i._RF.push({},"3ff4eBNBYlPI4ZDuTlbN/Fj","HurtboxController",void 0);var y=l.ccclass,f=l.property;e("HurtboxController",(d=y("HurtboxController"),p=f({type:u}),d((g=o((C=function(e){function o(){for(var o,t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return o=e.call.apply(e,[this].concat(i))||this,r(o,"entityCon",g,n(o)),o.collider=void 0,o.rb=void 0,o}t(o,e);var i=o.prototype;return i.start=function(){this.collider=this.getComponent(s),this.rb=this.getComponent(c),this.rb.useCCD=!0,this.collider.on("onCollisionEnter",this.onCollisionEnter,this),this.collider.on("onTriggerEnter",this.onTriggerEnter,this),this.collider.addMask(1)},i.onCollisionEnter=function(e){var o=e.otherCollider.node;console.log("Collided with: ",o.name)},i.onTriggerEnter=function(e){var o=e.selfCollider.node;console.log("Trigger Enter:",e.type,o.name),"enemy-dummy"===o.name&&o.getComponent(u).changeMesh()},o}(a)).prototype,"entityCon",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=C))||h));i._RF.pop()}}}));

System.register("chunks:///_virtual/IntroController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){var t,o,r,e,c,i,l;return{setters:[function(n){t=n.inheritsLoose},function(n){o=n.cclegacy,r=n._decorator,e=n.input,c=n.Input,i=n.director,l=n.Component}],execute:function(){var u;o._RF.push({},"caefcJEmbxEz54MSIx1CQ4J","IntroController",void 0);var s=r.ccclass;r.property,n("IntroController",s("IntroController")(u=function(n){function o(){return n.apply(this,arguments)||this}t(o,n);var r=o.prototype;return r.start=function(){e.on(c.EventType.KEY_DOWN,this.keyDown,this),i.preloadScene("main")},r.keyDown=function(n){i.loadScene("main")},o}(l))||u);o._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerMovementController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,t,s,n,o,h,a,r,c,d,l,g,v,p,y;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,s=i.initializerDefineProperty,n=i.assertThisInitialized},function(i){o=i.cclegacy,h=i._decorator,a=i.CCFloat,r=i.Vec3,c=i.input,d=i.Input,l=i.RigidBody,g=i.Animation,v=i.lerp,p=i.KeyCode,y=i.Component}],execute:function(){var u,M,k,f,w;o._RF.push({},"79592yVEyBIv5Ig0JMAUk1H","PlayerMovementController",void 0);var K=h.ccclass,E=h.property;i("PlayerMovementController",(u=K("PlayerMovementController"),M=E({type:a}),u((w=e((f=function(i){function e(){for(var e,t=arguments.length,o=new Array(t),h=0;h<t;h++)o[h]=arguments[h];return e=i.call.apply(i,[this].concat(o))||this,s(e,"speed",w,n(e)),e.xRotation=void 0,e.zRotation=void 0,e.isMovingLeft=void 0,e.isMovingRight=void 0,e.isMovingForward=void 0,e.isMovingBackward=void 0,e.zSpeed=void 0,e.xSpeed=void 0,e.rb=void 0,e.objectAnimation=void 0,e.currentClip=void 0,e.isFacingRight=void 0,e.scale=void 0,e.rotationSpeed=600,e.currentRotation=new r,e.keysPressed={},e}t(e,i);var o=e.prototype;return o.onLoad=function(){c.on(d.EventType.KEY_DOWN,this.movement,this),c.on(d.EventType.KEY_UP,this.releaseMovement,this),c.on(d.EventType.KEY_DOWN,this.onKeyDown,this),c.on(d.EventType.KEY_UP,this.onKeyUp,this),this.xRotation=0,this.zRotation=0,this.xSpeed=0,this.zSpeed=0,this.isMovingLeft=!1,this.isMovingRight=!1,this.isMovingForward=!1,this.isMovingBackward=!1,this.isFacingRight=!1},o.start=function(){this.rb=this.node.getComponent(l),this.objectAnimation=this.getComponent(g),this.rb.useCCD=!0,this.currentClip=this.objectAnimation.defaultClip.toString(),this.scale=this.node.getScale()},o.update=function(i){this.xSpeed=this.speed*this.xRotation,this.zSpeed=this.speed*this.zRotation,this.checkIsMoving?(this.rb.setLinearVelocity(new r(v(0,this.xSpeed,this.speed*i),this.rb.linearFactor.y,v(0,this.zSpeed,this.speed*i))),this.zSpeed<0?this.playAnimation("forward"):(Math.abs(this.xSpeed)>0||this.zSpeed>0)&&this.playAnimation("sideways-walk")):(this.rb.setLinearVelocity(new r(v(this.xSpeed,0,this.speed*i),this.rb.linearFactor.y,v(this.zSpeed,0,this.speed*i))),this.playAnimation("idle")),this.checkIsMovingXDimension(),this.checkIsMovingZDimension(),this.node.getRotation().getEulerAngles(this.currentRotation);var e=null;this.keysPressed[p.KEY_W]&&this.keysPressed[p.KEY_A]?e=new r(0,315,0):this.keysPressed[p.KEY_W]&&this.keysPressed[p.KEY_D]||this.keysPressed[p.KEY_S]&&this.keysPressed[p.KEY_A]?e=new r(0,45,0):this.keysPressed[p.KEY_S]&&this.keysPressed[p.KEY_D]?e=new r(0,315,0):this.keysPressed[p.KEY_W]?(this.checkKeysPressed||this.node.setScale(Math.abs(this.scale.x),this.scale.y,this.scale.z),e=this.node.scale.x>0?new r(0,90,0):new r(0,270,0)):this.keysPressed[p.KEY_S]?(this.checkKeysPressed||this.node.setScale(Math.abs(this.scale.x),this.scale.y,this.scale.z),e=this.node.scale.x>0?new r(0,270,0):new r(0,90,0)):(this.keysPressed[p.KEY_A]||this.keysPressed[p.KEY_D])&&(e=new r(0,0,0)),e&&this.rotateInstantly(e)},o.checkKeysPressed=function(){return!(!this.keysPressed[p.KEY_A]&&!this.keysPressed[p.KEY_D])},o.rotateInstantly=function(i){this.node.setRotationFromEuler(i.x,i.y,i.z)},o.onKeyDown=function(i){this.keysPressed[i.keyCode]=!0},o.onKeyUp=function(i){this.keysPressed[i.keyCode]=!1},o.movement=function(i){switch(i.keyCode){case p.KEY_D:this.isMovingRight=!0,this.isFacingRight&&this.flip();break;case p.KEY_A:this.isMovingLeft=!0,this.isFacingRight||this.flip();break;case p.KEY_W:this.isMovingForward=!0;break;case p.KEY_S:this.isMovingBackward=!0}},o.releaseMovement=function(i){switch(i.keyCode){case p.KEY_D:this.isMovingRight=!1;break;case p.KEY_A:this.isMovingLeft=!1;break;case p.KEY_W:this.isMovingForward=!1;break;case p.KEY_S:this.isMovingBackward=!1}},o.checkIsMoving=function(){return!!(this.isMovingBackward||this.isMovingForward||this.isMovingLeft||this.isMovingRight)},o.checkIsMovingXDimension=function(){return this.isMovingLeft||this.isMovingRight?(this.isMovingLeft&&!this.isMovingRight?this.xRotation=-1:!this.isMovingLeft&&this.isMovingRight&&(this.xRotation=1),!0):(this.xRotation=0,!1)},o.checkIsMovingZDimension=function(){return this.isMovingBackward||this.isMovingForward?(this.isMovingBackward&&!this.isMovingForward?this.zRotation=1:!this.isMovingBackward&&this.isMovingForward&&(this.zRotation=-1),!0):(this.zRotation=0,!1)},o.playAnimation=function(i){this.currentClip!=i&&(this.objectAnimation.play(i),this.currentClip=i)},o.flip=function(){this.scale=this.node.getScale(),this.node.setScale(-1*this.scale.x,this.scale.y,this.scale.z),this.isFacingRight=!this.isFacingRight},e}(y)).prototype,"speed",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=f))||k));o._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./IntroController.ts","./AnimationController.ts","./CameraController.ts","./EnemyController.ts","./HitboxController.ts","./HurtboxController.ts","./PlayerMovementController.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});