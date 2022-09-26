from datetime import datetime
import os
today = datetime.today()

# can be automated through admin section in future
# article params
headline = "Welcome to Media Team"
author = "Rishabh Girish Kurup"
imagehrefs = ["https://media.thetab.com/blogs.dir/90/files/2019/01/bunny-rabbit-rodent-hare-mammal-animal.jpeg"]
bodysections = ["s","Welcome to the ACE Media Team Website!","Our mission is to capture the essence of the AICS as the global community it is and share it with the world. We help teachers around the school and other students pursue the creative projects of their dreams.","s","So, what do we do?", "ACE Media Team is a collective of people from the <em>Amsterdam International Community School (AICS)</em> with a shared passion for media. We work on media oriented projects whether they be student or teacher led and deal with the development of photography, filmography (interviews and events) and the editing."]

"""
imagehrefs is list of links to images and position will be 
"""

# start of code
b=""
articlebody = ""
os.system("cd news;mkdir "+str(today.year)+";cd "+str(today.year)+";mkdir "+str(today.month)+";cd "+str(today.month)+";mkdir " + headline.lower().replace(" ","-")+f';cd {headline.lower().replace(" ","-")};> index.html')
articlebody="""<head>
  <script src="//code.jquery.com/jquery.min.js"></script>
  <script src="/import-head.js"></script>
</head>"""
articlebody+=f'<div id="body"><h2 class="news-heading">{headline}</h2><p class="byline"><strong>{author}</strong> • {today.strftime("%d %b %Y")}</p><hr>'
sub = False
im = 0
for i in bodysections:
  if i == "i":
    articlebody+=f'<img src="{imagehrefs[im]}">'
    im+=1
  elif i == "s":
    sub = True
  elif sub:
    articlebody+=f'<p class="subhead"><strong>{i}</strong></p>'
    sub=False
  else:
    articlebody+=f'<p class="article">{i}</p>'

articlebody+="</div>"
f = open(f'news/{today.year}/{today.month}/{headline.lower().replace(" ","-")}/index.html', "w")
f.write(articlebody)
f.close()
print(f'https://webv2.mediaataics.repl.co/news/{today.year}/{today.month}/{headline.lower().replace(" ","-")}/')
# create file using <div id="article-container"> + articlebody + </div>https://replit.com/@mediaataics/webv2#news/2022/8/big-chungus-has-arrived-at-aics/index.html

# https://webv2.mediaataics.repl.co/news/2022/8/big-chungus-has-arrived-at-aics/
# https://webv2.mediaataics.repl.co/news/2022/8/welcome-to-media-team/