google.maps.__gjsload__('layers', function(_){var vT=function(a,b,c){_.un.call(this);this.l=null!=c?(0,_.p)(a,c):a;this.j=b;this.f=(0,_.p)(this.Yk,this);this.b=[]},wT=function(a){a.fc=_.co(a.f,a.j);a.l.apply(null,a.b)},xT=function(a,b,c,d){this.B=a;this.F=b;this.D=c;this.f=this.b=null;this.j=this.l=d;this.m=new _.eo(this.C,0,this)},zT=function(a,b,c,d){this.B=d;this.H=null;this.D=!1;this.l=!0;this.F=Math.floor(_.Sa()/yT());this.b=null;this.m=new xT(a,b,c,this.Od());this.C=!0;this.f=new vT(this.G,yT(),this);this.f.Xg();this.j()},AT=function(a){var b=
a.m;a=a.Od();b.j=a;_.fo(b.m)},yT=function(){return window.__gm_trafficAutoRefreshPeriod||6E5},BT=_.oa(),FT=function(a,b,c,d){var e=new _.ku;e.ma=b;b=new _.Fl;b.data[0]=68;var f=_.Gl(b);_.Nk(f,"set");f.data[1]=d;e.Jh=b;var g=new xT(CT(c,a),DT,ET(c,a),e);_.Pl(a,"map_changed",function(){g.setMap(a.getMap())})},CT=function(a,b){return function(c,d){var e=c.__gm.b;e.set(_.Ej(e.get(),d));_.on(c,a);_.qn(a,"-p",b,!!c.W)}},DT=function(a,b,c){a=a.__gm.b;a.set(_.Ej(a.get().Xa(b),c))},ET=function(a,b){return function(c,
d){c=c.__gm.b;c.set(c.get().Xa(d));_.rn(a,"-p",b)}};_.t(vT,_.un);_.k=vT.prototype;_.k.Ec=!1;_.k.bd=0;_.k.fc=null;_.k.Xg=function(a){this.b=arguments;this.fc||this.bd?this.Ec=!0:wT(this)};_.k.stop=function(){this.fc&&(_.Vb.clearTimeout(this.fc),this.fc=null,this.Ec=!1,this.b=[])};_.k.Da=function(){vT.ob.Da.call(this);this.stop()};_.k.Yk=function(){this.fc=null;this.Ec&&!this.bd&&(this.Ec=!1,wT(this))};xT.prototype.setMap=function(a){this.f=a;_.fo(this.m)};xT.prototype.C=function(){this.f==this.b?this.b&&this.F(this.b,this.l,this.j):(this.b&&this.D(this.b,this.l),this.f&&this.B(this.f,this.j));this.b=this.f;this.l=this.j};zT.prototype.setMap=function(a){this.m.setMap(a);this.H=a;this.j();a?this.b||(this.b=_.A.U(this.B,"visibilitychange",this,this.j)):this.b&&(_.A.removeListener(this.b),this.b=null)};zT.prototype.j=function(){var a=this.l&&!!this.H&&!this.B.hidden;if(a!=this.C){if(a){var b=this.f;b.bd--;b.bd||!b.Ec||b.fc||(b.Ec=!1,wT(b))}else this.f.bd++;this.C=a}};zT.prototype.G=function(){this.F=Math.floor(_.Sa()/yT());AT(this);this.f.Xg()};
zT.prototype.Od=function(){var a=new _.ku;a.ma="traffic";this.D&&(a.parameters.incidents="1",a.parameters.incidents_text="1");a.parameters.t=this.F;return a};BT.prototype.f=function(a){var b=new zT(CT("Lt",a),DT,ET("Lt",a),window.document);_.Pl(a,"map_changed",function(){b.setMap(a.getMap())});_.Pl(a,"showincidents_changed",function(){var c=a.get("showIncidents");b.D=c;AT(b)});_.Pl(a,"autorefresh_changed",function(){var c=0!=a.get("autoRefresh");b.l=c;b.j()})};BT.prototype.b=function(a){FT(a,"bike","Lb","NonRoadmap")};BT.prototype.j=function(a){FT(a,"transit:comp","Lr","TransitFocused")};_.Xc("layers",new BT);});
