m='%3Cdiv%20id%3D%22gsearch%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%3Cform%20action%3D%22http%3A//www.google.com/cse%22%20id%3D%22cse-search-box%22%20target%3D%22_blank%22%3E%3Cdiv%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22cx%22%20value%3D%22002432522631165541499%3Aokf_w9ptqto%22%20/%3E%0A%3Cinput%20type%3D%22hidden%22%20name%3D%22ie%22%20value%3D%22UTF-8%22%20/%3E%0A%3Cinput%20type%3D%22text%22%20name%3D%22q%22%20size%3D%2220%22%20/%3E%0A%3Cinput%20type%3D%22submit%22%20name%3D%22sa%22%20value%3D%22Search%22%20/%3E%3C/div%3E%3C/form%3E%0A%3Cscript%20type%3D%22text/javascript%22%20src%3D%22http%3A//www.google.com/cse/brand%3Fform%3Dcse-search-box%26lang%3Did%22%3E%3C/script%3E%0A%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%3Cscript%20language%3D%22JavaScript%22%20type%3D%22text/javascript%22%20%3E%0Avar%20FadeDurationMS%3D1000%3B%0Afunction%20SetOpacity%28object%2CopacityPct%29%0A%7Bobject.style.filter%3D%27alpha%28opacity%3D%27+opacityPct+%27%29%27%3Bobject.style.MozOpacity%3DopacityPct/100%3Bobject.style.opacity%3DopacityPct/100%3Bobject.style.width%3D%27920px%27%3B%7D%0A%0Afunction%20ChangeOpacity%28id%2CmsDuration%2CmsStart%2CfromO%2CtoO%29%0A%7Bvar%20element%3Ddocument.getElementById%28id%29%3Bvar%20msNow%3D%28new%20Date%28%29%29.getTime%28%29%3Bvar%20opacity%3DfromO+%28toO-fromO%29*%28msNow-msStart%29/msDuration%3Bif%28opacity%3E%3D100%29%0A%7BSetOpacity%28element%2C100%29%3Belement.timer%3Dundefined%3B%7D%0Aelse%20if%28opacity%3C%3D0%29%0A%7BSetOpacity%28element%2C0%29%3Belement.timer%3Dundefined%3B%7D%0Aelse%0A%7BSetOpacity%28element%2Copacity%29%3Belement.timer%3Dwindow.setTimeout%28%22ChangeOpacity%28%27%22+id+%22%27%2C%22+msDuration+%22%2C%22+msStart+%22%2C%22+fromO+%22%2C%22+toO+%22%29%22%2C10%29%3B%7D%7D%0A%0Afunction%20FadeInImage%28foregroundID%2CnewImage%2CbackgroundID%29%0A%7Bvar%20foreground%3Ddocument.getElementById%28foregroundID%29%3Bif%28foreground.timer%29window.clearTimeout%28foreground.timer%29%3Bif%28backgroundID%29%0A%7Bvar%20background%3Ddocument.getElementById%28backgroundID%29%3Bif%28background%29%0A%7Bif%28background.src%29%0A%7Bforeground.src%3Dbackground.src%3BSetOpacity%28foreground%2C100%29%3B%7D%0Abackground.src%3DnewImage%3Bbackground.style.backgroundImage%3D%27url%28%27+newImage+%27%29%27%3Bbackground.style.backgroundRepeat%3D%27repeat%27%3Bbackground.style.backgroundPosition%3D%27center%20center%27%3Bvar%20startMS%3D%28new%20Date%28%29%29.getTime%28%29%3Bforeground.timer%3Dwindow.setTimeout%28%22ChangeOpacity%28%27%22+foregroundID+%22%27%2C%22+FadeDurationMS+%22%2C%22+startMS+%22%2C100%2C0%29%22%2C10%29%3B%7D%7Delse%7Bforeground.src%3DnewImage%3B%7D%7D%0Avar%20slideCache%3Dnew%20Array%28%29%3B%0A%0Afunction%20RunSlideShow%28pictureID%2CbackgroundID%2CimageFiles%2CdisplaySecs%29%0A%7Bvar%20imageSeparator%3DimageFiles.indexOf%28%22%3B%22%29%3Bvar%20nextImage%3DimageFiles.substring%280%2CimageSeparator%29%3BFadeInImage%28pictureID%2CnextImage%2CbackgroundID%29%3Bvar%20futureImages%3DimageFiles.substring%28imageSeparator+1%2CimageFiles.length%29%0A+%27%3B%27+nextImage%3BsetTimeout%28%22RunSlideShow%28%27%22+pictureID+%22%27%2C%27%22+backgroundID+%22%27%2C%27%22+futureImages+%22%27%2C%22+displaySecs+%22%29%22%2CdisplaySecs*1000%29%3BimageSeparator%3DfutureImages.indexOf%28%22%3B%22%29%3BnextImage%3DfutureImages.substring%280%2CimageSeparator%29%3Bif%28slideCache%5BnextImage%5D%3D%3Dnull%29%0A%7BslideCache%5BnextImage%5D%3Dnew%20Image%3BslideCache%5BnextImage%5D.src%3DnextImage%3B%7D%7D%0A%0A%0A%3C/script%3E%0A%09%09%09%09%09%09%20%20%20%20%20%20%20%20%20%0A%3Cscript%3E%09%09%09%09%09%20%20%20%20%20%20%20%20%20%0Afunction%20loadScript%28%29%0A%7B%0Avar%20likebutton%20%3D%20%27%3Cdiv%20id%3D%22nuzulhook_box%22%3E%3Cdiv%20id%3D%22likefbatas%22%3E%3Ca%20href%3D%22http%3A//facebook.com/nuzululzulkarnainhaq/%22%3Efacebook%3C/a%3E%3C/div%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_box%22%3E%3Cdiv%20%20id%3D%22tweets%22%3ETweets%3C/div%3E%3C/div%3E%27%3B%0Avar%20left_sidebar%20%3D%20%27%3Cdiv%20id%3D%22nuzulhook_sidebar%22%3E%27%20+%20likebutton%20+%20document.getElementById%28%27templatemo_left_sidebar%27%29.innerHTML%20+%20%27%3Cdiv%20id%3D%22nuzulhook_sidebar_bottom%22%3E%27+%20document.getElementById%28%27templatemo_right_sidebar%27%29.innerHTML%20+%20%27%3C/div%3E%3C/div%3E%27%3B%0Avar%20tabs%20%3D%20%22%3Cdiv%20id%3D%5C%22tabs%5C%22%3E%3Cdiv%20id%3D%5C%22tab1%5C%22%20class%3D%5C%22tab_sel%5C%22%20align%3D%5C%22center%5C%22%20onClick%3D%5C%22javascript%3AdisplayPanel%28%5C%271%5C%27%29%3B%5C%22%3ETab%201%3C/div%3E%3Cdiv%20id%3D%5C%22tab2%5C%22%20class%3D%5C%22tab%5C%22%20style%3D%5C%22margin-left%3A1px%3B%5C%22%20align%3D%5C%22center%5C%22%20onClick%3D%5C%22javascript%3AdisplayPanel%28%272%27%29%3B%5C%22%3ETab%202%3C/div%3E%3C/div%3E%3Cdiv%20class%3D%5C%22tab_bdr%5C%22%3E%3C/div%3E%22%3B%0Avar%20panel%20%3D%20%27%3Cdiv%20class%3D%22panel%22%20id%3D%22panel1%22%20style%3D%22display%3A%20block%22%3ENUZUL%3Cbr%3EzULKARNAIN%3C/div%3E%3Cdiv%20class%3D%22panel%22%20id%3D%22panel2%22%20style%3D%22display%3A%20none%22%3EHAQ%3C/div%3E%27%3B%0Avar%20content%20%3D%20%27%3Cdiv%20id%3D%22nuzulhook_content%22%3E%27%20+%20document.getElementById%28%27templatemo_content%27%29.innerHTML%20+%20%27%3Cdiv%20id%3D%22nuzulhook_nav%22%3E%3C/div%3E%3C/div%3E%27%3B%0Avar%20right_sidebar%20%3D%20%27%3Cdiv%20id%3D%22templatemo_right_sidebar%22%3E%27%20+%20document.getElementById%28%27templatemo_right_sidebar%27%29.innerHTML%20+%20%27%3C/div%3E%27%3B%0A%0Avar%20content%20%3D%20left_sidebar%20+%20content%20%3B%0Avar%20menupopup1%20%3D%20%27%3Cdiv%20id%3D%22menupopup1%22%3E%20%09%3Cul%20class%3D%22parent%22%3E%20%09%09%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id%22%3EHome%3C/a%3E%3C/li%3E%20%09%09%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24176.html%22%3EAbout%3C/a%3E%3C/li%3E%20%09%09%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24185.html%22%3EAskep%3C/a%3E%3C/li%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24192.html%22%3EDownload%3C/a%3E%3C/li%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24196.html%22%3EAlbum%3C/a%3E%3C/li%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22%23%22%3EMore%3C/a%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cul%20class%3D%22child%22%3E%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24186.html%22%3EBuku%20Tamu%3C/a%3E%3C/li%3E%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/artikel_detail-24183.html%22%3ESahabat%3C/a%3E%3C/li%3E%20%09%09%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22http%3A//nuzulul-fkp09.web.unair.ac.id/profil.html%22%3EProfile%3C/a%3E%3C/li%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cli%3E%3Ca%20href%3D%22http%3A//www.google.com/cse%3Fcx%3D002432522631165541499%253Aokf_w9ptqto%26ie%3DUTF-8%26q%3Dsite%253Anuzulul-fkp09.web.unair.ac.id%26sa%3DTelusuri%26siteurl%3Dnuzulul-fkp09.web.unair.ac.id%252F%23gsc.tab%3D0%26gsc.q%3Dsite%253Anuzulul-fkp09.web.unair.ac.id%26gsc.page%3D1%22%20target%3D%22_blank%22%3EDaftar%20Isi%3C/a%3E%3C/li%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/ul%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/li%3E%09%09%20%09%3C/ul%3E%20%3C/div%3E%27%3B%0Avar%20medsos%20%3D%20%27%3Cdiv%20style%3D%22width%3A250px%3Bheight%3A50px%3Bleft%3A400px%3Btop%3A-50px%3Bposition%3Arelative%3B%22%3E%20%3Ca%20href%3D%22http%3A//www.facebook.com/nuzulhook%22%20target%3D%22_blank%22%3E%3Cimg%20src%3D%22http%3A//web.unair.ac.id/admin/file/f_13693_logo-fb.jpg%22%20width%3D%2250px%22%3E%3C/a%3E%20%3Ca%20href%3D%22http%3A//www.twitter.com/nuzulhook%22%20target%3D%22_blank%22%3E%3Cimg%20src%3D%22http%3A//web.unair.ac.id/admin/file/f_13693_logo-twitter.jpg%22%20width%3D%2250px%22%3E%3C/a%3E%20%3Ca%20href%3D%22http%3A//www.youtube.com/user/nuzulhook%22%20target%3D%22_blank%22%3E%3Cimg%20src%3D%22http%3A//web.unair.ac.id/admin/file/f_13693_youtube_logo.png%22%20width%3D%2250px%22%3E%3C/a%3E%20%3Ca%20href%3D%22https%3A//plus.google.com/113810582017056258327%3Frel%3Dauthor%22%20target%3D%22_blank%22%3E%3Cimg%20src%3D%22http%3A//web.unair.ac.id/admin/file/f_13693_google_plus_logo.jpg%22%20width%3D%2250px%22%3E%3C/a%3E%20%3C/div%3E%27%3B%0Avar%20foot%20%3D%20%27Copyright%20%A9%202011-2015%20Nuzulul%20Zulkarnain%20Haq.%20All%20rights%20reserved.%3C/br%3ESeluruh%20artikel%20di%20nuzulul-fkp09.web.unair.ac.id%20dapat%20anda%20perbanyak%2C%20cetak%2C%20modifikasi%20dan%20distribusikan%20secara%20bebas%20asal%20tetap%20mencantumkan%20nama%20penulis%20dan%20URL%20lengkap%20artikel.%3C/br%3EPowered%20by%20Universitas%20Airlangga%27%3B%0Adocument.getElementById%28%27templatmeo_wrapper%27%29.innerHTML%3D%20%27%3Cdiv%20id%3D%22nuzulhook_header%22%3E%3Cdiv%20id%3D%22nuzulhook_header_top%22%3E%3Cimg%20id%3D%22nuzulhook_header_top_image%22%20style%3D%22opacity%3A%200%3B%22%20src%3D%22https%3A//sites.google.com/site/nuzulz/download/headerkampuscunair.jpg%22%20width%3D%22100px%22%3E%3Cdiv%20id%3D%22nuzulhook_header_top_trans%22%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_top_line%22%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_top_search%22%3E%3C/div%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_bottom%22%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_poto%22%3E%3Cimg%20src%3D%22https%3A//sites.google.com/site/nuzulz/download/profilnuzul.jpg%22%20width%3D%22100%25%22%3E%3Cdiv%20id%3D%22nuzulhook_header_poto_border%22%3E%3C/div%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_title%22%3E%3Ch2%3ENuzulul%20Zulkarnain%20Haq%3C/h2%3E%3Ch3%3EA%20Hybrid%20Nurse%20%26%20Blogger%20Universitas%20Airlangga%3C/h3%3E%3Cdiv%20id%3D%22liketwitteratas%22%3E%3Ca%20href%3D%22http%3A//twitter.com/nuzulhook/%22%3Etwitter%3C/a%3E%3C/div%3E%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_header_menu%22%3E%20%27%20+%20menupopup1%20+%20medsos%20+%20%27%3C/div%3E%20%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_content_wrapper%22%3E%27%20+%20content%20+%20%27%3C/div%3E%3Cdiv%20id%3D%22nuzulhook_footer%22%3E%20%27+%20foot%20+%27%3C/div%3E%27%3B%0Adocument.getElementById%28%27templatemo_footer_wrapper%27%29.innerHTML%3D%27%27%3B%0Adocument.getElementById%28%27liketwitteratas%27%29.innerHTML%20%3D%20%22%3Cdiv%20id%3D%5C%22liketwitteratas%5C%22%3E%3Ciframe%20src%3D%5C%22http%3A//nuzulul.github.com/ngawur/liketwitter.html%5C%22%20scrolling%3D%5C%22no%5C%22%20frameborder%3D%5C%220%5C%22%20style%3D%5C%22border%3Anone%3B%20overflow%3Ahidden%3B%20width%3A150px%3B%20height%3A25px%3B%5C%22%20allowTransparency%3D%5C%22true%5C%22%3E%3C%5C/iframe%3E%3C%5C/div%3E%22%3B%0Adocument.getElementById%28%27likefbatas%27%29.innerHTML%20%3D%20%22%3Cdiv%20id%3D%5C%22likefbatas%5C%22%3E%3Ciframe%20src%3D%5C%22http%3A//www.facebook.com/plugins/likebox.php%3Fhref%3Dhttps%253A%252F%252Fwww.facebook.com%252Fnuzulhook%26width%3D320%26height%3D290%26colorscheme%3Dlight%26show_faces%3Dtrue%26header%3Dtrue%26stream%3Dfalse%26show_border%3Dfalse%26appId%3D172259479541279%5C%22%20scrolling%3D%5C%22no%5C%22%20frameborder%3D%5C%220%5C%22%20style%3D%5C%22border%3Anone%3B%20overflow%3Ahidden%3B%20width%3A340px%3B%20height%3A290px%3B%5C%22%20allowTransparency%3D%5C%22true%5C%22%3E%3C%5C/iframe%3E%3C%5C/div%3E%22%3B%0Adocument.getElementById%28%27tweets%27%29.innerHTML%20%3D%20%22%3Cdiv%20id%3D%5C%22tweets%5C%22%3E%3Ciframe%20src%3D%5C%22http%3A//nuzulul.github.com/ngawur/tweetszul.html%5C%22%20scrolling%3D%5C%22no%5C%22%20frameborder%3D%5C%220%5C%22%20style%3D%5C%22border%3Anone%3B%20overflow%3Ahidden%3B%20width%3A340px%3B%20height%3A290px%3B%5C%22%20allowTransparency%3D%5C%22true%5C%22%3E%3C%5C/iframe%3E%3C%5C/div%3E%22%3B%0Adocument.getElementById%28%27nuzulhook_header_top_search%27%29.innerHTML%20%3D%20%27%3Cdiv%20id%3D%22search_form%22%3E%27%20+%20document.getElementById%28%27gsearch%27%29.innerHTML%20+%27%3C/div%3E%20%27%3B%0Adocument.getElementById%28%27nuzulhook_nav%27%29.innerHTML%20%3D%20%22%3Cdiv%20id%3D%5C%22pages%5C%22%3E%3Cdiv%20class%3D%5C%22navigation%5C%22%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D1%5C%22%3E1%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D2%5C%22%3E2%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D3%5C%22%3E3%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D4%5C%22%3E4%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D5%5C%22%3E5%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D6%5C%22%3E6%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D7%5C%22%3E7%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D8%5C%22%3E8%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D9%5C%22%3E9%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D10%5C%22%3E10%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D11%5C%22%3E11%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D12%5C%22%3E12%3C%5C/a%3E%3Ca%20class%3D%5C%22page-numbers%5C%22%20href%3D%5C%22index.html%3Fhal%3D13%5C%22%3E13%3C%5C/a%3E%3C%5C/div%3E%3C%5C/div%3E%22%3B%0A%0ARunSlideShow%28%22nuzulhook_header_top_image%22%2C%22nuzulhook_header_top%22%2C%22https%3A//sites.google.com/site/nuzulz/download/headerkampuscunair.jpg%3Bhttps%3A//sites.google.com/site/nuzulz/download/profilnuzul.jpg%22%2C10%29%3B%0A%0Avar%20tag%20%3D%20document.createElement%28%22script%22%29%3B%0Atag.src%20%3D%20%22https%3A//ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js%22%3B%0Adocument.getElementsByTagName%28%22body%22%29%5B0%5D.appendChild%28tag%29%3B%0A%0Avar%20tag%20%3D%20document.createElement%28%22script%22%29%3B%0Atag.src%20%3D%20%22http%3A//nuzulul.github.com/ngawur/javascripts/jquery.lightbox-0.5.js%22%3B%0Adocument.getElementsByTagName%28%22body%22%29%5B0%5D.appendChild%28tag%29%3B%0A%0Avar%20tag%20%3D%20document.createElement%28%22script%22%29%3B%0Atag.src%20%3D%20%22http%3A//connect.facebook.net/en_US/all.js%22%3B%0Adocument.getElementsByTagName%28%22body%22%29%5B0%5D.appendChild%28tag%29%3B%0A%0Avar%20tag%20%3D%20document.createElement%28%22script%22%29%3B%0Atag.src%20%3D%20%22http%3A//nuzulul.github.com/ngawur/javascripts/fb_gallery.js%22%3B%0Adocument.getElementsByTagName%28%22body%22%29%5B0%5D.appendChild%28tag%29%3B%0A%0Avar%20tag%20%3D%20document.createElement%28%22script%22%29%3B%0Atag.src%20%3D%20%22http%3A//nuzulul.github.com/ngawur/javascripts/galeri.js%22%3B%0Adocument.getElementsByTagName%28%22body%22%29%5B0%5D.appendChild%28tag%29%3B%0A%0A%7D%0Awindow.onload%20%3D%20loadScript%3B%0A%3C/script%3E%09%0A%0A%09%09%09%09%20%20%20%20%20%20%20%09%09%09%09%09%20%20%20%20%20%20%20%20%20%0A%3Cstyle%3E%0Abody%20%7Bbackground%3A%23E9EAED%20url%28%22asd.jpg%22%29%3B%7D%0Aa%3Alink%2C%20a%3Avisited%20%7B%20color%3A%20%233A5795%3B%20text-decoration%3A%20none%3B%20font-weight%3A%20normal%3B%20%7D%0Aa%3Aactive%2C%20a%3Ahover%20%7B%20color%3A%20rgb%280%2C%20153%2C%200%29%3B%20text-decoration%3A%20underline%3B%20%7D%0A%23templatmeo_wrapper%20%7B%20width%3A%20850px%3B%20margin%3A%2030px%20auto%3Boverflow%3Ahidden%3B%20%7D%0A%23nuzulhook_header%20%7B%20border%3A1px%20solid%20%23D3D6DB%3Bclear%3A%20both%3B%20width%3A%20850px%3B%20height%3A%20360px%3B%20padding%3A%200px%200px%3B%20background%3A%23fff%20url%28%22https%3A//sites.google.com/site/nuzulz/download/headerkampuscunair.jpg%22%29%20repeat%20scroll%200%25%200%25%3B%20%7D%0A%23nuzulhook_header_top%20%7Bheight%3A300px%3Bbackground%3A%23000%20url%28%22https%3A//sites.google.com/site/nuzulz/download/headerkampuscunair.jpg%22%29%3Boverflow%3Ahidden%3B%7D%0A%23nuzulhook_header_top_image%20%7Bheight%3A300px%3B%7D%0A%23nuzulhook_header_top_trans%20%7Bheight%3A300px%3Bbackground%3Aurl%28%27https%3A//sites.google.com/site/nuzulz/download/trans.png%27%29%20repeat-x%20scroll%20left%200px%20bottom%20-1px%20transparent%3Bposition%3Arelative%3Btop%3A-300px%3B%7D%0A%23nuzulhook_header_top_line%20%7Bheight%3A10px%3Bbackground%3Ayellow%3Bposition%3Arelative%3Btop%3A-310px%3B%7D%0A%23nuzulhook_header_top_search%20%7Bheight%3A0px%3Bposition%3Arelative%3Btop%3A-600px%3B%7D%0A%23search_form%20%7Bfloat%3Aright%3Bmargin-right%3A10px%3B%7D%0A%23nuzulhook_header_bottom%20%7Bheight%3A60px%3Bbackground%3A%23fff%3B%7D%0A%23nuzulhook_header_poto%20%7Bborder%3A3px%20solid%20%23D3D6DB%3Bwidth%3A150px%3Bheight%3A150px%3Bbackground%3A%23fff%3Bposition%3Arelative%3Btop%3A-170px%3Bleft%3A30px%3Boverflow%3Ahidden%3B%7D%0A%23nuzulhook_header_title%7Bposition%3Arelative%3Btop%3A-280px%3Bleft%3A200px%3Bcolor%3A%23fff%3B%7D%0A%23nuzulhook_header_title%20h2%20%7Bfont-family%3A%22Trebuchet%20MS%22%2C%20Arial%2C%20Sans-serif%3Bfont-size%3A250%25%3B%7D%0A%23liketwitteratas%20%7Bposition%3Arelative%3Btop%3A-18px%3Bleft%3A170px%3Bheight%3A0px%3B%7D%0A%23nuzulhook_header_menu%7Bposition%3Arelative%3Btop%3A-250px%3Bleft%3A200px%3Bcolor%3A%23000%3B%7D%0A%23nuzulhook_content_wrapper%20%7B%20clear%3A%20both%3B%20padding%3A%200px%3Bmargin-top%3A10px%3B%20%7D%0A%23nuzulhook_sidebar%20%7B%20float%3A%20left%3B%20margin-right%3A%2010px%3B%20width%3A%20340px%3B%20%7D%0A%23nuzulhook_content%20%7B%20float%3A%20left%3B%20width%3A%20500px%3B%20%7D%0A%23nuzulhook_box%20%7Bborder%3A1px%20solid%20%23D3D6DB%3Bmargin-bottom%3A%2010px%3B%20background%3A%23fff%20%3B%7D%0A%0A.templatemo_box%20%7B%20border%3A1px%20solid%20%23D3D6DB%3Bmargin-bottom%3A%2010px%3B%20background%3A%23fff%20%3B%20%7D%0A.templatemo_box%20.body%20%7B%20padding%3A%205px%2015px%3B%20%7D%0A.templatemo_box%20h2%20%7B%20position%3A%20relative%3B%20height%3A%2025px%3B%20margin%3A%200px%3B%20padding%3A%208px%2015px%3B%20font-size%3A%2014px%3B%20color%3A%20%234E5665%3B%20font-weight%3A%20bold%3B%20background%3A%23F6F7F8%20%20%7D%0A.templatemo_box%20h2%20span%20%7B%20position%3A%20absolute%3B%20width%3A%2010px%3B%20height%3A%2035px%3B%20top%3A%200px%3B%20left%3A%200px%3B%20background%3A%20url%28%22%22%29%20repeat%20scroll%200%25%200%25%20transparent%3B%20%7D%0A.templatemo_box%20.box_bottom%20%7B%20position%3A%20relative%3B%20height%3A%2012px%3B%20background%3A%20url%28%22%22%29%20repeat%20scroll%20right%20top%20transparent%3B%20%7D%0A.templatemo_box%20.box_bottom%20span%20%7B%20position%3A%20absolute%3B%20width%3A%2010px%3B%20height%3A%2012px%3B%20top%3A%200px%3B%20left%3A%200px%3B%20background%3A%20url%28%22%22%29%20repeat%20scroll%200%25%200%25%20transparent%3B%20%7D%0A.more%20a%7Bbackground%3A%23E9EAED%7D%0A.side_menu%20li%20%7B%20padding%3A%200px%3B%20margin%3A%205px%200px%3Bborder-left%3A2px%20solid%20%23000%20%7D%0A.side_menu%20li%20a%20%7Bbackground%3Aurl%28%29%3B%7D%0A%0A%23nuzulhook_sidebar%20.templatemo_box%20%7Bheight%3A%2032px%3B%20overflow%3A%20hidden%3B%7D%0A%23nuzulhook_sidebar%20.templatemo_box%3Ahover%20%7Bheight%3A100%25%7D%0A%23nuzulhook_sidebar_bottom%20.templatemo_box%20%7Bheight%3A%2032px%3B%20overflow%3A%20hidden%3B%7D%0A%23nuzulhook_sidebar_bottom%20.templatemo_box%3Ahover%20%7Bheight%3A100%25%7D%0A%0A%23templatemo_footer%20%7Bwidth%3A0px%3B%7D%0A%23nuzulhook_footer%20%7B%20border%3A1px%20solid%20%23D3D6DB%3Bclear%3A%20both%3B%20width%3A%20830px%3B%20height%3A%20100%25%3B%20padding%3A%2010px%3B%20background%3A%23fff%3Bfont-size%3A80%25%3Bline-height%3A1em%3B%20%7D%0A%0A%23menupopup1%7Boverflow%3Ahidden%3Bwidth%3A640px%3Bheight%3A40px%3Bpadding%3A5px%200%200%200%7D%23menupopup1%2C%23menupopup1%20ul%20li%3Ahover%20ul.child%20li%20a%7Bbackground%3A%23fff%7D%23menupopup1%20ul%7Bmargin%3A0%20-40px%3B%7D%23menupopup1%20ul%20li%7Bmargin%3A0%205px%200%205px%3B%20border-right%3A1px%20solid%20%234E5665%3B%7D%23menupopup1%20ul%20li%7Blist-style-type%3Anone%3Bfloat%3Aleft%7D%23menupopup1%20ul%20li%20a%7Bfont%3A14px%20arial%3Btext-decoration%3Anone%3Bmargin%3A0%2010px%200%200%3Bcolor%3A%234E5665%7D%23menupopup1%20ul%20li%20ul.child%7Bdisplay%3Anone%7D%23menupopup1%20ul%20li%3Ahover%20ul.child%2C%23menupopup1%20ul%20li%3Ahover%20ul.child%20li%20a%7Bdisplay%3Ablock%7D%23menupopup1%20ul%20li%3Ahover%20ul.child%7Bposition%3Aabsolute%3Bz-index%3A2%3Btext-align%3Aleft%7D%23menupopup1%20ul%20li%3Ahover%20ul.child%20li%20a%7Bpadding%3A10px%2020px%2010px%2020px%3Bmargin%3A0%200%200%2010px%7D%23menupopup1%20ul%20li%3Ahover%20ul.child%20li%7Bfloat%3Anone%3Bmargin%3A0%200%200%20-30px%7D%23menupopup1%20ul%20li%20a%3Ahover%7Btext-decoration%3Aunderline%7D%0A%0A%23pages%20%7Bmargin-bottom%3A10px%3B%7D%0A.navigation%7Bdisplay%3Ablock%3Boverflow%3Ahidden%3Bwidth%3A100%25%3Bheight%3Aauto%3Bpadding%3A5px%2020px%205px%20%21important%3Bclear%3Aboth%20%21important%3B%7D%0A.page-numbers%7Bpadding%3A4px%209px%204px%209px%20%21important%3Bborder%3Asolid%201px%20%23DCDCDC%20%21important%3Bborder-color%3A%233390CA%20%21important%3Border-radius%3A3px%20%21important%3B-moz-border-radius%3A3px%20%21important%3B-webkit-border-radius%3A3px%20%21important%3Bcolor%3A%23fff%20%21important%3Bmargin-right%3A3px%20%21important%3Bborder-color%3A%23478223%20%21important%3Bbackground%3A%23599F2F%20%21important%3Bbackground%3A-moz-linear-gradient%28top%2C%239FE355%201px%2C%2379BF4A%201px%2C%23599F2F%29%20%21important%3Bbackground%3A-webkit-gradient%28linear%2C0%200%2C0%20100%25%2Ccolor-stop%280.02%2C%239FE355%29%2Ccolor-stop%280.02%2C%2379BF4A%29%2Ccolor-stop%281%2C%23599F2F%29%29%20%21important%3B%7D%0A.navigation%20a%7Bcolor%3A%23707070%20%21important%3Bbackground%3A%23FFFFFF%20%21important%3Bborder-radius%3A3px%20%21important%3B-moz-border-radius%3A3px%20%21important%3B-webkit-border-radius%3A3px%20%21important%3Bpadding%3A6px%209px%206px%209px%20%21important%3Bmargin-right%3A3px%20%21important%3Btext-decoration%3Anone%20%21important%3Bfont-size%3A12px%20%21important%3B%7D%0A.navigation%20a%3Ahover%7Bcolor%3A%23fff%20%21important%3Bborder-color%3A%23478223%20%21important%3Bbackground%3A%23599F2F%20%21important%3Bbackground%3A-moz-linear-gradient%28top%2C%23048DC6%201px%2C%23048DC6%201px%2C%23048DC6%29%20%21important%3Bbackground%3A-webkit-gradient%28linear%2C0%200%2C0%20100%25%2Ccolor-stop%280.02%2C%239FE355%29%2Ccolor-stop%280.02%2C%2379BF4A%29%2Ccolor-stop%281%2C%23599F2F%29%29%20%21important%3B%7D%0A%3C/style%3E';d=unescape(m);document.write(d);
