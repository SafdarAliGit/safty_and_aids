from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in safty_and_aids/__init__.py
from safty_and_aids import __version__ as version

setup(
	name="safty_and_aids",
	version=version,
	description="this Safty And Aids app",
	author="portal",
	author_email="safdar211@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
