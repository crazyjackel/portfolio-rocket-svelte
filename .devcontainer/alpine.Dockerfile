#WIP 
# Has issues running Rocket due to proc-macro2 failing to link well with the installed gcc 

# Use the official Alpine image
FROM rust:alpine3.21

# Install necessary packages
RUN apk add --no-cache \
        binutils \
        build-base \
        bash \
        curl \
        python3 \
        nodejs \
        npm \
        git \
        alpine-sdk

# Verify Rust installation
RUN rustc --version && cargo --version

# Install Svelte and Vite globally
RUN npm install -g svelte vite degit yarn

# Install cargo-tree. Handy for debugging the build inside the container.
RUN cargo install cargo-tree

ENV RUSTFLAGS="-C target-feature=-crt-static" \
    CC="/usr/bin/x86_64-alpine-linux-musl-gcc"

# Create a working directory
WORKDIR /app

# Expose ports for Vite dev server
EXPOSE 5173

# Add a default command to the container
CMD ["bash"]
