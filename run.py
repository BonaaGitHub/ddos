import os
os.system("clear")
os.system("chmod +x xerxes.c")
os.system("gcc xerxes.c -o xerxes")
print("""\033[1;91m
   
██╗░░░░░░█████╗░░██████╗░██╗███╗░░██╗
██║░░░░░██╔══██╗██╔════╝░██║████╗░██║
██║░░░░░██║░░██║██║░░██╗░██║██╔██╗██║
██║░░░░░██║░░██║██║░░╚██╗██║██║╚████║
███████╗╚█████╔╝╚██████╔╝██║██║░╚███║
╚══════╝░╚════╝░░╚═════╝░╚═╝╚═╝░░╚══╝""")
Website_Link = input("\033[1;91m Enter Website Link :\033[1;92m")
os.system("./xerxes "+Website_Link+" 80")
