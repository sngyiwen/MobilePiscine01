.PHONY: install start ios android web typecheck clean

install:
	npm install

start: install
	npx expo start --tunnel

ios: install
	npx expo start --tunnel --ios

android: install
	npx expo start --tunnel --android

web: install
	npx expo start --web

typecheck:
	npx tsc --noEmit

clean:
	rm -rf node_modules .expo
