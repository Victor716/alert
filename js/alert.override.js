			window.alertIcons = {};
			window.alertIcons.err = "<div class='alerticon'>";
			window.alertIcons.err += "<div class='alerticon-error-x'>";
			window.alertIcons.err += "<div class='alerticon-error-left'></div>";
			window.alertIcons.err += "<div class='alerticon-error-right'></div>";
			window.alertIcons.err += "</div>";
			window.alertIcons.err += "<div class='alerticon-error-placeholder'></div>";
			window.alertIcons.err += "<div class='alerticon-error-fix'></div>";
			window.alertIcons.err += "</div>";
						
			window.alertIcons.suc = "<div class='alerticon'>";
			window.alertIcons.suc += "<div class='alerticon-tickle'>";
			window.alertIcons.suc += "<div class='alerticon-tickle-left'></div>";
			window.alertIcons.suc += "<div class='alerticon-tickle-right'></div>";
			window.alertIcons.suc += "</div>";
			window.alertIcons.suc += "<div class='alerticon-tickle-placeholder'></div>";
			window.alertIcons.suc += "<div class='alerticon-tickle-fix'></div>";
			window.alertIcons.suc += "</div>";
			
			window.defaultSetting = {
					title: "提示",
					ok: "确定",
					cancel: "取消",
					msg: "提示框", 
					approve: "img/approve.jpg",
					deny:"img/deny.jpg"
			}
				
			window.frameDom = document.createElement('section');
			window.frameDom.setAttribute("class", "alert-wrap");
			window.frameDom.setAttribute("id", "alert-wrap");
			window.headerDom = document.createElement('header');
			window.headerDom.setAttribute("class", "alert-header");
			window.frameDom.appendChild(window.headerDom);
			window.contentDom = document.createElement('div');
			window.contentDom.setAttribute("class", "alert-content");
			window.frameDom.appendChild(window.contentDom);
			window.footerDom = document.createElement('footer');
			window.footerDom.setAttribute("class", "alert-footer");
			window.footerDom.innerHTML = "<button id='ok' onclick='closeAlert()'>" + defaultSetting.ok + "</button>";
			window.frameDom.appendChild(window.footerDom);
			
			var browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];
			window.alert = function (isOk, setting) {
				if (document.getElementById("alert-wrap")) return;
				setting = setting || window.defaultSetting;
				window.footerDom.childNodes[0].className = '';
				window.headerDom.innerHTML = isOk? window.alertIcons.suc: window.alertIcons.err;
				console.log(setting.msg)
				window.contentDom.innerText = setting.msg || defaultSetting.msg;
				var buttonColor = isOk? "suc": "err";
				window.footerDom.childNodes[0].classList.add(buttonColor);
				document.body.append(window.frameDom);
				setTimeout(function() {
					frameDom.classList.remove("hideAlert");
					frameDom.classList.add("showAlert");
				}, 100);	
			}
			
			function closeAlert() {
				console.log("closeAlert");
				frameDom.classList.remove("showAlert");
				frameDom.classList.add("hideAlert");
				var alertDom = document.getElementById("alert-wrap");
				console.log(alertDom);
				alertDom.classList.remove("in");
				setTimeout(function() {
					document.body.removeChild(alertDom); 
				}, 500);
			}
			
			var msg = "手机卡家里是多久啊离开首都加拉加斯老师，" + 
						"机卡家里是多久啊离开首都加拉加斯老师,手机卡家里是多久啊离开首都加拉加斯老师，手机卡家里是多久啊离开首都加拉加斯老师，手机卡家里是多久啊离开首都加拉加斯老师";
			window.setting = {
					msg: msg
				}