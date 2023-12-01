.PHONY: all dist

SRC_FILES = $(shell find src -type f)

all: dist

christmas.proto:
	wget -qO christmas.proto https://raw.githubusercontent.com/acmCSUFDev/christmasd/main/christmas.proto

src/christmaspb: src/christmaspb/christmas.ts

src/christmaspb/christmas.ts: christmas.proto
	protoc -I=. --plugin=node_modules/.bin/protoc-gen-ts_proto --ts_proto_opt=esModuleInterop=true --ts_proto_opt=importSuffix=.js --ts_proto_out=src/christmaspb christmas.proto

dist: dist/index.js dist/index.d.ts

dist/index.js: $(SRC_FILES) src/christmaspb package.json package-lock.json
	@mkdir -p $(@D)
	esbuild --log-level=warning --bundle src/index.ts --outdir=dist --minify --sourcemap

dist/index.d.ts: dist/index.js
	@mkdir -p $(@D)
	tsc --emitDeclarationOnly --outFile dist/index.d.ts --project ./tsconfig.json
