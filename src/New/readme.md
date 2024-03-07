Hello, I need help with something, you see I will show you my script and what I want to do is send everything from that form to this chat id
This is the id of the chat to which I want to send the messages
```1214273904936357921```
I think everything is fine but it still gives me an error, what could it be?

```
!portfo

$nomention
$if[$isSlash==true]
$color[$random[000;999999]]
$title[:briefcase: **Portafolio de $username ** :briefcase:]
$description[$username, por favor preciosa el botón para poder enviar la tu portafolio ]
$footerIcon[$authorAvatar]
$footer[$username]
$thumbnail[$serverIcon]
$authorIcon[$serverIcon]
$addButton[yes;portfo;ENVIAR PORTAFOLIO;success;;:briefcase:;]
$endif
$if[$isSlash==false]
$reply
$color[$random[000;999999]]
$title[:briefcase: **Portafolio de $username ** :briefcase:]
$description[$username, por favor preciosa el botón para poder enviar la tu portafolio ]
$footerIcon[$authorAvatar]
$footer[$username]
$thumbnail[$serverIcon]
$authorIcon[$serverIcon]
$addButton[yes;portfo;ENVIAR PORTAFOLIO;success;;:briefcase:;]
$endif
```
```
$onInteraction[results]

$nomention
$dm[1138477896114131075; Respuestas enviadas con éxito]
$title[Tenemos un nuevo Portafolio]
$description[
Nombre : $input[nombre]
Link : $input[link]
Link : $input[link1]
Link : $input[link2]
Descripción : $input[mensaje]
$color[$randomText[111;9999]]
$footerIcon[$authorAvatar]
$footer[$username]
$thumbnail[$serverIcon]
$authorIcon[$serverIcon]]
```

```
$onInteraction[portfo]

$nomention
$newModal[result; PORTAFOLIO]
$addTextInput[nombre;short;¿Cual es tu nombre?;3;30;yes;;$username]
$addTextInput[link;short;Coloca acá tu URL/Link;5;100;yes;;https://discord.com/$username]]
$addTextInput[link1;short;Coloca acá tu URL/Link;5;100;no;;https://Instagram.com/$username]]
$addTextInput[link2;short;Coloca acá tu URL/Link;5;100;no;;https://twitter.com/$username]]
$addTextInput[mensaje;paragraph;sugerencia;5;1000;no;;Añade una pequeña descripción de los enlaces que acabas de agregar]
```
