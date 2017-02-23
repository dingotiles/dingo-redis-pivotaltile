FROM ubuntu:15.10

RUN apt-get update && \
    apt-get -y install git zip unzip \
        build-essential \
        libxml2-dev libxslt-dev libcurl4-openssl-dev \
        zlib1g-dev libssl-dev libreadline6-dev libyaml-dev \
        tree file curl wget bzr jq \
        libpython-dev python-pip \
    && pip --no-input install awscli \
    && apt-get clean

# install ruby & required gems/CLIs
RUN cd \
      && wget http://ftp.ruby-lang.org/pub/ruby/2.3/ruby-2.3.3.tar.gz \
      && tar -xzvf ruby-2.3.3.tar.gz \
      && cd ruby-2.3.3/ \
      && ./configure \
      && make \
      && make install \
      && ruby -v \
      && gem install bundler bosh_cli cf-uaac license_finder fog mime-types --no-rdoc --no-ri

COPY https://github.com/geofffranks/spruce/releases/download/v1.8.10/spruce-linux-amd64 /usr/bin/spruce
RUN chmod 755 /usr/bin/spruce

COPY https://cli.run.pivotal.io/stable?release=linux64-binary&version=6.23.0 /tmp/cf.tgz
RUN tar xzf /tmp/cf.tgz -C /usr/bin && rm /tmp/cf.tgz

# Set environment variables.
ENV GOROOT /goroot
ENV GOPATH /gopath
ENV PATH $GOROOT/bin:$GOPATH/bin:$PATH

# Install Go
RUN \
  mkdir -p /goroot && \
  curl https://storage.googleapis.com/golang/go1.7.4.linux-amd64.tar.gz | tar xvzf - -C /goroot --strip-components=1
