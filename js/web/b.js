						bg="https://s1.ax1x.com/2020/04/08/GW35dS.jpg";
						logo="https://s1.ax1x.com/2020/04/08/GW8pi4.png";
						if (test==""){
							if (logo1==""){
								logo1=logo;
							}
							if (bg1==""){
								bg1=bg;
							}
						}else{
								logo1=logo;
								bg1=bg;			
						}
						var c=document.getElementById("myCanvas");
						var ctx=c.getContext("2d");
						ctx.lineWidth = 4;
						var img= new Image;
						var img2="data:image/png;base64,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";
						//img.src="%cusimg%"

						if (test==""){
						if (img3==""){
							img.src=img2;
						}else{
							img.src=img3;
						}}else{
							img.src=img2;
						}
					img.onload = function() {
						ctx.beginPath();
						ctx.drawImage(img,0,0);
						ctx.closePath();
						ctx.font = 'bold 23px Arial';
						ctx.textBaseline='middle';
						ctx.textAlign='center';
						ctx.strokeStyle='#fff';
						ctx.strokeText("服 务 器 信 息",177,41);
						ctx.fillStyle = '#000000';
						ctx.fillText("服 务 器 信 息",177,41);
						ctx.font = 'bold 17px Arial';
						ctx.fillText("服务器IP ",120,90);
						ctx.fillText("在线人数 ",120,135);
						ctx.fillText("连接速度 ",120,180);
						ctx.fillText("内存使用 ",120,225);
						ctx.font='17px Arial';
						ctx.fillText(ip,180,112);
						ctx.fillText(online,180,157);
						ctx.fillText(tps,180,202);
						ctx.fillText(nc,180,247);
						}

						
