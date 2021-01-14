const TelegramBot = require('node-telegram-bot-api');
var config = require('./config')
var firebase = require('firebase')


var firebase_config = config.firebase_config;
var token = config.token;
firebase.initializeApp(firebase_config);

const bot = new TelegramBot(token, {polling: true});
var db = firebase.database().ref('Airdrop');
const img_url = 'Airdrop_logo_14_06_01-copy-1-copy.png';
//var t_username = '';
var u_email = '';
var e_wallet = '';
var r_twitter= '';

var gabung = [];
var gabung_email = [];
var gabung_twitter = [];
var viewe= '';
var vieww= '';
var viewt= '';
var views= '';
var viewd= '';
var viewb= '';
var viewr= '';
var referral_code= '';


bot.onText(/\/start (.+)|\/start/i, (msg, match) => {
    referral_code = match[1];
    exports.data=referral_code;
    bot.sendPhoto(msg.chat.id,img_url,{caption : "Welcome to Pecycoin Token Airdrop! 😍 \nPlease join our community and get 500.000 token PECY.\n\nBIG NEWS Countdown has begun: https://pecycoin.com get behind the #pecycoin on Twitter & Social Media!\n\nPlease read Rules!!! \n\n🔥🔥🔥🔥🔥🔥🔥🔥🔥 "}).then(() => {
        
        var option = {
            "reply_markup": { 
                "keyboard": [["📜 Rules", "👫 Join us"], ["✉️ Email"]],
                resize_keyboard: true
                }
        };
        bot.sendMessage(msg.chat.id, "STEP : \n 1. 📜 Read Rules \n 2. 👫 Join telegram group and twitter official pecycoin \n 3. ✉️ Input your email \n 4. Input your twitter \n 5. 💵 Input your wallet",option)
      // bot.sendMessage(msg.chat.id, "ref ->" + referral_code)
    })
    })


    bot.onText(/\/total/, (msg) => {
        var option = {
            "reply_markup": { 
                "keyboard": [["📜 Rules", "👫 Join us"], ["✉️ Email"], ["📊 Balance", "🔗 Referal Link"]],
                resize_keyboard: true
                }
        };
    var db = firebase.database().ref('Airdrop');
    db.on('value', DataBerhasil, DataError);
    function DataBerhasil(dataman)
    {   
        var jml_wallet = '';
        var jml_balance = '';
        var b = [];
        var a = [];
        var jml = 0;
        var sisa = 0;
        dataman.forEach(function(snapshot) {
        jml_wallet = snapshot.val().wallet
        b.push(jml_wallet)
        jml_balance = snapshot.val().balance
        a.push(jml_balance) 
        });
        console.log(b);
        for(tu=0; tu < a.length; tu++)
        {
            jml += a[tu]
        }
        sisa = 7000000000 - jml;
        bot.sendMessage(msg.chat.id, "Total Registered Users : "+b.length+"\nTotal Airdrop : 7.000.000.000\nTotal Balance All : "+jml+"\nRemaining Balance From Supply : "+sisa,option)        
        }
        function DataError(err) 
        {
        console.log(err);
        }                   
    })

    bot.on('message', (msg) => {
     
        var user_chat = msg.chat.id; 
        var linkk = "https://t.me/Pecycoin_Bot?start="+user_chat;
        var send_text = msg.text;
///Rules
        var step1_text = '📜 Rules';
        if (send_text.toString().indexOf(step1_text) === 0) {
            bot.sendMessage(msg.chat.id, "Airdrop Rules ⚔️⚔️\nYou can now earn PECY tokens for free by inviting other users to Pecycoin Official Telegram chat, and performing these simple Twitter tasks! \n\nJoin the #pecycoin community and earn tokens by being active and participating in the group. Start here... \n\n1) Follow our Twitter & Join our official chat! Get 500.000 PECY \n2) Invite Friends & Family to join our telegram! Get 10.000 PECY/INVITE, Maximum 20 referrals. \n\nIMPORTANT: You wallet must be ERC20 Token Compatible, and NOT AN EXCHANGE ADDRESS! \n\nJOIN US \n\nJoin & follow us on Telegram and Twitter \n\nJoin & Follow = 500.000 PECY \nInvite Friends = 10.000 PECY/INVITE \n\n STEP : \n 1. 📜 Read Rules \n 2. 👫 Join telegram group and twitter official pecycoin \n 3. ✉️ Input your email \n 4. Input your twitter \n 5. 💵 Input your wallet")
     
        }
////Join
        var send_text2 = msg.text;
        var step2_text = '👫 Join us'; 
        if (send_text2.toString().indexOf(step2_text) === 0) {
            bot.sendMessage(msg.chat.id, "Join & follow us on Telegram and Twitter \n\nJoin & Follow = 500.000 PECY \nInvite Friends = 10.000 PECY/INVITE")
            var text = 'Join Chat Telegram Group';
            var keyboardStr = JSON.stringify({
                inline_keyboard: [
                [
                    {text:'Join Chat Telegram Pecycoin',url:'https://t.me/PecycoinOfficial'}
                ]
                ]
            });
    
            var keyboard = {reply_markup: JSON.parse(keyboardStr)};
            bot.sendMessage(msg.chat.id,text,keyboard);
    
           var text = 'Follow Twitter';
            var keyboardStr = JSON.stringify({
                inline_keyboard: [
                [
                    {text:'Follow Twitter Pecycoin',url:'https://twitter.com/pecycoin'}
                ]
                ]
            });
            var keyboard = {reply_markup: JSON.parse(keyboardStr)};
            bot.sendMessage(msg.chat.id,text,keyboard);
     
        }
 
////Balance
        var send_text3 = msg.text;
        var step3_text = '📊 Balance';
        if(send_text3.toString().indexOf(step3_text) === 0) {
               
            var id = user_chat;
           
            db.child(id).once("value", snapshot => {
            console.log(snapshot.val())
            viewt = snapshot.val().twitter
            viewe = snapshot.val().email
            vieww = snapshot.val().wallet
            views = snapshot.val().status
            viewd = snapshot.val().createAt
            viewb = snapshot.val().balance
            viewr = snapshot.val().refer
            snapshot.val.userchat
            bot.sendMessage(msg.chat.id, "📅 You have joined us on : \n "+ viewd +" \n\n📊 Balance : "+ viewb +" PECY \n👬 Referrals : "+viewr+"\n\nOur details :\n-------------------\nWallet : \n"+ vieww +" \nTwitter : "+ viewt +"\nEmail : "+ viewe +"\nStatus : "+ views +"\nRefferal : "+ viewr +"\n", option)
            
        })

        
    }

        
////Email
        var send_text4 = msg.text;
        var step4_text = '✉️ Email';
        if(send_text4.toString().indexOf(step4_text) === 0) {
            bot.sendMessage(msg.chat.id, "Please enter your email address")
        }

        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if(re.test(send_text4)) {

            var option = {
                "reply_markup": { 
                    "keyboard": [["Twitter"]],
                    resize_keyboard: true
                    }
            };
            u_email = send_text4;
            bot.sendMessage(msg.chat.id, "✉️ Email address: "+u_email, option);
        
        }
 ///Twitter     
        var send_text5 = msg.text;
        var step5_text = 'Twitter';
        if(send_text5.toString().indexOf(step5_text) === 0) {
            bot.sendMessage(msg.chat.id, "Please enter your twitter profile (@username)")
        }
        if(send_text5.toString().charAt(0) === '@') {
            var option = {
                "reply_markup": { 
                    "keyboard": [["💵 Wallet"]],
                    resize_keyboard: true
                    }
            };
            r_twitter = send_text5;             
            bot.sendMessage(msg.chat.id, "Twitter account: "+r_twitter, option);
        
        }
////Wallet      
        var send_text6 = msg.text;
        var step6_text = '💵 Wallet';
        if(send_text6.toString().indexOf(step6_text) === 0) {
            bot.sendMessage(msg.chat.id, "Please Enter ERC20 Token Compatible Wallet (Not Exchange) 🔑")
        }
        var re_eth = /^0x[a-fA-F0-9]{40}$/g
        if(re_eth.test(send_text6)) {
            e_wallet = send_text6;
            if(r_twitter == '' || u_email == '')
            {
            var option = {
                    "reply_markup": { 
                        "keyboard": [["✉️ Email"]],
                        resize_keyboard: true
                        }
            };
            bot.sendMessage(msg.chat.id, "Please complete email & twitter data", option)
            
            }else
            {
            bot.sendMessage(msg.chat.id, 'Confirm ❓ Yes(continue) / No(Cancel)', {
                reply_markup: {
                  keyboard: [
                   [{
                       "text": "Yes ✅"
                        
                    }], 
                    [{
                        "text": "No ❌"
                    }]
                ],
                resize_keyboard: true
                }
             })
            }
        }
                 
        var confirm = 'Yes ✅';
        if(send_text.toString().indexOf(confirm) === 0) {
            var tanggallengkapq = new String();
            var namabulan = ("January February March April May June July August September October November December");
            namabulan = namabulan.split(" ");
            var tgld = new Date();
            var tanggalq = tgld.getDate();
            var bulanq = tgld.getMonth();
            var tahunq = tgld.getFullYear();
            tanggallengkapq = tanggalq+ " " + namabulan[bulanq] + " " + tahunq;
                var id = referral_code;
                if (id != undefined){
                   
                  
                    db.on('child_added', snap => {
                    var cekwallet = snap.val().wallet
                    gabung.push(cekwallet)
                    var cekemail = snap.val().email
                    gabung_email.push(cekemail)
                    var cektwitter = snap.val().twitter
                    gabung_twitter.push(cektwitter)
                    })
                    const newArray = gabung.filter((itemq, indexq) => gabung.indexOf(itemq) === indexq);
                    gabung = newArray; 
                    const newArray1 = gabung_email.filter((itemq, indexq) => gabung_email.indexOf(itemq) === indexq);
                    gabung_email = newArray1;  
                    const newArray2 = gabung_twitter.filter((itemq, indexq) => gabung_twitter.indexOf(itemq) === indexq);
                    gabung_twitter = newArray2;             
               
                    if(gabung == '' || gabung_email == '' || gabung_twitter == '')
                    { 
                        
                        bot.sendMessage(msg.chat.id, "Are you sure ❓")
                      
            
                    }else{
                        for (var i = 0; i < gabung.length; i++) 
                        {
                            if(e_wallet.toLocaleLowerCase() == gabung[i])
                            {
                                var option = {
                                    "reply_markup": { 
                                        "keyboard": [["💵 Wallet"]],
                                        resize_keyboard: true
                                        }
                                };
                                bot.sendMessage(msg.chat.id, "This 💵 Wallet is already in use", option)
                                
                            gabung=[];
                            return true;
                            }
                            if(u_email == gabung_email[i])
                            {
                                var option = {
                                    "reply_markup": { 
                                        "keyboard": [["✉️ Email"]],
                                        resize_keyboard: true
                                        }
                                };
                                bot.sendMessage(msg.chat.id, "This ✉️ Email is already in use", option)
                                
                            gabung_email=[];
                            return true;
                            }
                            if(r_twitter == gabung_twitter[i])
                            {
                                var option = {
                                    "reply_markup": { 
                                        "keyboard": [["Twitter"]],
                                        resize_keyboard: true
                                        }
                                };
                                bot.sendMessage(msg.chat.id, "This Twitter is already in use", option)
                                
                            gabung_twitter=[];
                            return true;
                            }
                        }
                        
                        db.child(user_chat).update({
                                    
                                    
                            "twitter"   : r_twitter,
                            "email"     : u_email,
                            "wallet"    : e_wallet.toLocaleLowerCase(),
                            "status"    : 'Pending',
                            "refer"     : 0,
                            "balance"   : 500000,
                            "createAt"  : tanggallengkapq
                            
                        }).then(() => {

                            var bonus = 10000;
                   
                                db.child(id).once('value', snap => {
                                var poin = snap.val().balance
                                var jum = snap.val().refer
                                var refl = jum + 1;
                                var tot = poin + bonus;
                                if(jum > 19){
                                    bot.sendMessage(msg.chat.id, "Refferal Limit")
                                }
                                else 
                                {
                                db.child(id).update({
                                    "balance"   : tot,
                                    "refer"     : refl,                        
                                })
                                }
                                })
                             
                                
                            var option = {
                                "reply_markup": { 
                                    "keyboard": [["📊 Balance", "🔗 Referal Link"]],
                                    resize_keyboard: true
                                    }
                            };

                            bot.sendMessage(msg.chat.id, "Your 💵 Wallet : "+e_wallet, option)
                        //    bot.sendMessage(msg.chat.id, "Your invite by refferal id : "+id, option)
                        }).catch((err) => {
                            console.log(err)
                        })

                   gabung=[];
                   gabung_email=[];
                   gabung_twitter=[];
                        return false;
                    }
        
}
else
{         
                        db.on('child_added', snap => {
                            var cekwallet = snap.val().wallet
                            gabung.push(cekwallet)
                            var cekemail = snap.val().email
                            gabung_email.push(cekemail)
                            var cektwitter = snap.val().twitter
                            gabung_twitter.push(cektwitter)
                            })
                            const newArray = gabung.filter((itemq, indexq) => gabung.indexOf(itemq) === indexq);
                            gabung = newArray; 
                            const newArray1 = gabung_email.filter((itemq, indexq) => gabung_email.indexOf(itemq) === indexq);
                            gabung_email = newArray1;  
                            const newArray2 = gabung_twitter.filter((itemq, indexq) => gabung_twitter.indexOf(itemq) === indexq);
                            gabung_twitter = newArray2;             

                            if(gabung == '' || gabung_email == '' || gabung_twitter == '')
                            { 
                                
                                bot.sendMessage(msg.chat.id, "Are you sure ❓")
                            

                            }else{
                                for (var i = 0; i < gabung.length; i++) 
                                {
                                    if(e_wallet.toLocaleLowerCase() == gabung[i])
                                    {
                                        var option = {
                                            "reply_markup": { 
                                                "keyboard": [["💵 Wallet"]],
                                                resize_keyboard: true
                                                }
                                        };
                                        bot.sendMessage(msg.chat.id, "This 💵 Wallet is already in use", option)
                                        
                                    gabung=[];
                                    return true;
                                    }
                                    if(u_email == gabung_email[i])
                                    {
                                        var option = {
                                            "reply_markup": { 
                                                "keyboard": [["✉️ Email"]],
                                                resize_keyboard: true
                                                }
                                        };
                                        bot.sendMessage(msg.chat.id, "This ️✉️ Email is already in use", option)
                                    
                                    gabung_email=[];
                                    return true;
                                    }
                                    if(r_twitter == gabung_twitter[i])
                                    {
                                        var option = {
                                            "reply_markup": { 
                                                "keyboard": [["Twitter"]],
                                                resize_keyboard: true
                                                }
                                        };
                                        bot.sendMessage(msg.chat.id, "This Twitter is already in use", option)
                                    
                                    gabung_twitter=[];
                                    return true;
                                    }
                            }

                            db.child(user_chat).update({              
                                "twitter"   : r_twitter,
                                "email"     : u_email,
                                "wallet"    : e_wallet.toLocaleLowerCase(),
                                "status"    : 'Pending',
                                "refer"     : 0,
                                "balance"   : 500000,
                                "createAt"  : tanggallengkapq
                                
                            }).then(() => {
                                var option = {
                                    "reply_markup": { 
                                        "keyboard": [["📊 Balance", "🔗 Referal Link"]],
                                        resize_keyboard: true
                                        }
                                };
                                bot.sendMessage(msg.chat.id, "Your 💵 Wallet : "+e_wallet,option)

                            }).catch((err) => {
                                console.log(err)
                            })     
                            gabung=[];  
                            gabung_email=[];
                            gabung_twitter=[];
                            return false;
                        }                         
}
}
        var calcel = 'No ❌';
        if(send_text.toString().indexOf(calcel) === 0) {
            var option = {
                "reply_markup": { 
                    "keyboard": [["📜 Rules", "👫 Join us"], ["✉️ Email"]],
                    resize_keyboard: true
                    }
            };
            bot.sendMessage(msg.chat.id, "Thank you", option); 
        }

////Referral  
        var send_text7 = msg.text;
        var step7_text = '🔗 Referal Link';
        if(send_text7.toString().indexOf(step7_text) === 0) {
           
               
                db.child(user_chat).once('value', snap => {
                var max_ref = snap.val().refer   
                if(max_ref > 19)
                {
                bot.sendMessage(msg.chat.id, "Refferal Limit")
                } else {
                bot.sendMessage(msg.chat.id, "Your Official referral link is: \n\n "+linkk+" \n\n🎁 Send this link to your friends\nto earn PECY tokens‼️\n10.000/Invite.")
                }
            })
            
        
        }
       
   

});


