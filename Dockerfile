FROM ubuntu:latest

# update ubuntu
RUN apt-get update

# install deps required to install deno
RUN apt-get install -y apt-utils curl zip unzip

# install deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
# ARG DENO_INSTALL="/root/.deno"
# RUN PATH="$DENO_INSTALL/bin:$PATH"
# ARG DENO_PATH="/root/.deno/bin/deno"

# The port that your application listens to.
EXPOSE 1991

WORKDIR /app

# Prefer not to run as root.
# USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally fetch deps.ts will download and compile _all_ external files used in main.ts.
# COPY deps.ts .
# RUN deno cache deps.ts

COPY main.ts /app

# These steps will be re-run upon each file change in your working directory:
# ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
# RUN deno cache main.ts
# RUN which deno

CMD ["/root/.deno/bin/deno", "run", "--allow-net", "/app/main.ts"]