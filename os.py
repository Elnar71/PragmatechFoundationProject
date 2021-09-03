from pathlib import Path
import shutil
import os

# Creating Folder using mkdir()
folder='Demo'

parent_dir='C:/Users/Elnar/Desktop/'

path=os.path.join(parent_dir,folder)

os.mkdir(path)
print("Folder '% s' created" % folder)

# Copying pictures from pictures file to this foler using  shutil.copy2(method)
src_dir = 'C:/Users/Elnar/Desktop/Pictures/'
dest_dir = 'C:/Users/Elnar/Desktop/Demo/'

files = os.listdir(src_dir)

for pic in files:
 shutil.copy2(os.path.join(src_dir, pic), dest_dir)
